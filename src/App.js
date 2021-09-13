import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import { useState, useEffect } from "react";
// Import Components
import Home from "./components/Home"
import SideNav from "./components/SideNav";
import SpecificUser from './components/SpecificUser';
import SpecificGoal from './components/SpecificGoal'
import EditUser from './components/EditUser'
import EditGoal from './components/EditGoal'
import NewUser from './components/NewUser'
//

function App(props, state) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/`)
      .then((res) => res.json())
      // .then(res => console.log(res))

      .then((data) => setUserData(data))
      // .then(res=> console.log(res))

  }, []);


  return (<div>
    

    <div className="App">
      <main>
        {/* <SideNav name='Jonathan' width={wid} closeNav={closeSidenav}/>        */}
        <Route exact path="/" render={()=><Home users={userData}/>}    /> 

        <Route exact path="/user/new" render={() => <NewUser users={userData}/>}/>
        <Route exact path="/user/:name" render={routerProps => <SpecificUser match={routerProps.match} users={userData}/>}/>

        <Route exact path="/goal/new" render={() => <NewUser users={userData}/>}/>
        <Route exact path="/goal/:id" render={routerProps => <SpecificGoal match={routerProps.match} users={userData}/>}/>

        {/* ---------------------------- */}
        <Route exact path="/user/edit/:id" render={routerProps => <EditUser match={routerProps.match}/>}/>
        <Route exact path="/goal/edit/:id" render={routerProps => <EditGoal match={routerProps.match} users={userData}/>}/>
        {/* ---------------------------- */}
        <SideNav exact path ="/SideNav" render={()=><SideNav users={userData}/>} />

      {/* <LoginForm /> */}
    </main>
    </div></div>
  );
}

export default App;
