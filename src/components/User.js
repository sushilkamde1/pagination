import React from "react";
import "./User.css";

const User = ({ user }) => {
  return (
    <div className="dib tc ma4 br3 pa3 ba card">
      <img src={user.avatar} className="card-img-top" alt={user.first_name} />
      <div className="card-body">
        <h5 className="card-title">
          {user.first_name}
          {user.last_name}
        </h5>
        <p className="card-subtitle mb-2 text-muted">Email: {user.email}</p>
      </div>
    </div>
  );
};

export default User;
