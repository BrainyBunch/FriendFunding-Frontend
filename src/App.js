import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import { useState, useEffect } from "react";
// Import Components
import Home from "./components/Home"
// 

const userGoals = [
  {
    id: 1,
    name: 'Vic',
    goal: 'Japan',
    description: 'First time to Japan',
    amountsaved: '575'
  },
  {
    id: 2,
    name: 'Jeff',
    goal: 'Italy',
    description: 'Flores',
    amountsaved: '560',
  },
  {
    id: 3,
    name: 'Ynna',
    goal: 'Costa Rica',
    description: 'Vacation',
    amountsaved: '575',
  },
  {
    id: 4,
    name: 'Billie',
    goal: 'Boston',
    description: 'Visit Will',
    amountsaved: '198',
  },
]


function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  return (
    <div className="App">
      <main>      
        <Route exact path="/" render={()=><Home users={userData}/>}    /> 
        {/* <Route exact path="/user/new" render={() => <NewUser />}/>
        <Route exact path="/user/show/:name" render={routerProps => <UserDetail match={routerProps.match}/>}/>
        <Route exact path="/user/edit/:id" render={routerProps => <EditUser match={routerProps.match}/>}/> */}
      {/* <LoginForm /> */}
    </main>
    </div>
  );
}

export default App;
