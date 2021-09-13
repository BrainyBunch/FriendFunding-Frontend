import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const SpecificUser = ({users, match, setNewUser, userData}) => {
    const userDetail = users.filter(user=> user.name === match.params.name)[0]
    
    return (
        <div class="specified">  
            <h1 id='userHead'>{userDetail.name}</h1>
            <h1>{userDetail.description}.</h1>
            <h1>{userDetail.amountsaved}</h1>
        </div>
    )
}

export default SpecificUser