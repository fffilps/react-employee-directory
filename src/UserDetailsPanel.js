import React from "react";

export default function UserDetailsPanel({ user }) {
  return (
    <div className="user-details-container">
      {user != null ? (
        <div className="user-details-card">
          <div className="user-details-row">
            {user.first_name} {user.last_name} - {user.occupation}
          </div>
          <div className="user-details-row user-catch-phrase">
            "{user.catch_phrase}"
          </div>
        </div>
      ) : (
        "Please Select a user"
      )}
    </div>
  );
}
