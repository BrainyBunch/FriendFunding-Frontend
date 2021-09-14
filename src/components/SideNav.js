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
        <div className='SideNasssv'>

        <p><a href='/'>Home</a></p>
        <p><a href='/users'>Users</a></p>
        <p><a href='/new'>New Users</a></p>
        <p><a href='/goal'>Goals</a></p>

        </div>
    );
}

export default sidenav;