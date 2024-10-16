import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

const User = () => {
  const [user, setUser] = useState([
    { userId: 1, isActive: false, rating: 8 },
    { userId: 2, isActive: true, rating: 9 },
  ]);

  console.log(user[0]);

  const handleStatus = (id) => {
    const updatedUser = user.map((preUser) =>
      preUser.userId === id
        ? { ...preUser, isActive: !preUser.isActive }
        : preUser
    );
    setUser(updatedUser);
  };

  const hanldeRating = () => {
    const totRating = user.reduce((acc, user) => acc + user.rating, 0);
    const avgRating = totRating / user.length;
    return avgRating;
  };

  return (
    <div>
      <h4 className="m-4">User</h4>
      <div>
        {user.map((user, index) => (
          <div key={index} className="m-4">
            <button
              className={`btn ${
                user.isActive === false ? "btn-danger" : "btn-primary"
              }`}
            >
              {user.isActive === false ? "In-active" : "Active"}
            </button>
          </div>
        ))}

        <div>
          <h4 className="text-primary">
            Average Rating <span className="text-white">{hanldeRating()}%</span>
          </h4>
        </div>

        <table className="table text-center">
          <thead>
            <tr>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={index}>
                <td>{user.rating}</td>
                <td>
                  <Dropdown className="text-center">
                    <Dropdown.Toggle style={{ backgroundColor: "white" }}>
                      <Badge
                        bg={user.isActive === false ? "danger" : "success"}
                      >
                        {user.isActive === false ? "In-Active" : "Registered"}
                        <i className="fa-solid fa-angle-down"></i>
                      </Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleStatus(user.userId)}>
                        {user.isActive === false ? "Register" : "Deactivate"}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
