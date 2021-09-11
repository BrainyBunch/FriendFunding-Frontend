import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

const Home = (props) => {
    return (
      <div>
        
            {props.users.map((user) => (
              <div class="" id='' key={user.name}>
                  {/* <Link to={`/user/show/${user.name}`}><img src={user.image???Profile Pic????} ></img></Link > */}
                  {/* <Link to={{pathname:`/user/edit/${user._id}`, state:user}}>Update {user.name}</Link > */}
                 
                <div>
                  <h5 class='card-title'> {user.name} </h5>                 
                </div>
              </div>
            ))}
      </div>
    );
  };
  
  export default Home;