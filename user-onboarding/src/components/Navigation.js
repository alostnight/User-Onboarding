import React from 'react';
import { Link } from 'react-router-dom';


export default function Navigation() {
  return (
    <div>
      <div className="App">
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
            <Link to="/form">Add User</Link>
        </div>
        <div>
          <Link to="/users">Users</Link>
        </div>
        
      </div>
    </div>
  );
};

