import React from 'react'
import {Link} from 'react-router-dom'

function GoalList(props) {
    return (
        <div>
              <h1>
                FriendFunding
              </h1>
              <h1>Done for all intensive purposes</h1>  
              {props.goals.map((goal) => (
                  <ul>
                      <li>
                          <Link to={`/goal/${goal.id}`}>
                          <div class="" id='' key={goal.title}>
                              {goal.title}
                          </div>
                          </Link >
                          <Link to={`/goal/${goal.id}`}> | Update</Link >
                          <h5 class='card-title'>  </h5>                 
                      </li>
                  </ul>
              ))}
        </div>
      );
    };

export default GoalList
