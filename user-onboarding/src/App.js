import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Form from './components/Form';
import './App.css';

export default function App() {


  return (
    <div>
      <nav>
        <Link to="/Form">Add User</Link>
        <Link to="/Users">Current Users</Link>
      </nav>
      <h1>User Onboarding</h1>
    </div>
  );
};



    //     <div className="App">
//       <header className="App-header">
//         <nav class="nav">
//         <Link to="./App">Home</Link>
//         <Link to="./users">Users</Link>
//         </nav>
//         <div>
//         <h1>User Onboarding</h1>
//         <Route exact path = "/" component={Form} />
        
//         </div>
//       </header>
//     </div>
//   );
// }