import React from "react";
import User from "./User";

const Users = ({ users }) => {
  return users.map((user) => <User user={user} key={user.id} />);
};

export default Users;
