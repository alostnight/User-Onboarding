import React from "react";

export default function Users(props) {
    return (
            <div className="user-list">
              {props.users.map(user => (
                <div className="userS" key={user.id}>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              ))}
            </div>
          );
}
