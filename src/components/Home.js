import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
const Home = (props) => {
    return (
      <div>
            <h1>
              FriendFunding
            </h1>
            <h1>Done for all intensive purposes</h1>

            <h2>*Description here*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h2>

            {props.users.map((user) => (
                <ul>
                    <li>
                        <Link to={`/user/${user.name}`}>
                        <div class="" id='' key={user.name}>
                            {user.name}
                        </div>
                        </Link >
                        <Link to={`/user/edit/${user.id}`}> | Update</Link >
                        <h5 class='card-title'>  </h5>                 
                    </li>
                </ul>
            ))}
      </div>
    );
  };
  
  export default Home;