import React from "react";
import "./styles.css";
import { useState } from "react";
import { USERS_DATA } from "./USERS_DATA.JS";
import UserDetailsPanel from "./UserDetailsPanel";
import Select from "react-select";

export default function App() {
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);

  function isSelected() {}

  return (
    <div className="App">
      <ul className="user-names-list">
        {USERS_DATA.map((item, index) => (
          <li
            key={index}
            className="user"
            onClick={() => setSelectedUserIndex(index)}
            onChange={<li style={{ backgroundColor: "red" }}></li>}
          >
            {item.user_name}
          </li>
        ))}
      </ul>
      <UserDetailsPanel user={USERS_DATA?.[selectedUserIndex] || null} />
    </div>
  );
}
