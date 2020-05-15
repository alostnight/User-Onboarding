import React from 'react';
import { Route } from 'react-router-dom';
import Form from './Form';
import users from "./users";
import './App.css';
import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Onboarding</h1>
        <Form />
        <div>
        <Route exact path = "/" component={Form} />
        <Route path="./users" component = {users} />
      </div>
      </header>
    </div>
  );
}