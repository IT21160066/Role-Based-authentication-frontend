import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";
import AdminDashboard from "../pages/AdminDashboard";
import NavBar from "../components/NavBar";

const USER_TYPES = {
  PUBLIC_USER: "Public User",
  REGISTERED_USER: "Registered User",
  ADMIN_USER: "Admin User",
};

const CURRENT_USER_TYPE = USER_TYPES.REGISTERED_USER;

function PublicElemet({ children }) {
  return <>{children}</>;
}

function RegisteredElemet({ children }) {
  if (
    CURRENT_USER_TYPE === USER_TYPES.REGISTERED_USER ||
    CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER
  ) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/"} />;
  }
}

function AdmindElemet({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
    return <>{children}</>;
  } else {
    return (
      <div>
        <h3>You don't have access to this page...</h3>
      </div>
    );
  }
}

const Router = () => {
  return (
    <div>
      <div style={{}}>
        <NavBar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <PublicElemet>
              <Home />
            </PublicElemet>
          }
        ></Route>
        <Route
          path="/user"
          element={
            <RegisteredElemet>
              <User />
            </RegisteredElemet>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <AdmindElemet>
              <AdminDashboard />
            </AdmindElemet>
          }
        ></Route>
        <Route
          path="*"
          element={
            <div>
              <h1>Page not found!</h1>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Router;
