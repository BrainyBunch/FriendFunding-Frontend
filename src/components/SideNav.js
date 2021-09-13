import React from 'react'
import { useState, useEffect } from "react";
import '../App.css';

// function SideNav(props) {

//     return (
        
//         <div className='SideNav'style={{width: props.width}}>
            
//             <button onClick={props.closeNav}>X</button>
//                 <a href="/">Home</a>
//                 <a href="#section">Home</a>
//                 <a href="#section">{props.name}</a>
            
//         </div>
//     )
// }

// export default SideNav

const sidenav = (props, state) => {
    return (
        <div className='SideNav'>

        <a href='/'>Home</a>
        <a href='/user_list'>Users</a>
        <a href='/goal_list'>Goals</a>

        </div>
    );
}

export default sidenav;