import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Navigation from './components/Navigation';
import Form from './components/Form';
import './App.css';


export default function App() {


  return (
    <div class="home">
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/form" component={Form} />
        </div>
        <div>
          <h1>Welcome to User Onboarding</h1>
        </div>
      </div>
  );
}