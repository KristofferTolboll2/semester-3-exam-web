import React from "react";
import UserMapper from '../../data/UserMapper'

export default function User({ name, id }) {
  let userMapper = new UserMapper();
  return (
    <li className="list-group-item">
      <a href={'http://localhost:3000/profile/' + id}>
      {name}
        <span className="icon glyphicon glyphicon-user" />
      </a>
    </li>
  );
}
