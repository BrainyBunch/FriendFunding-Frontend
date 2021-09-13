import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

const SpecificGoal = ({Goals, match, setNewGoal, GoalData}) => {
    const GoalDetail = Goals.filter(Goal=> Goal.name === match.params.name)[0]
    
    return (
        <div class="specified">  
            <h1 id='goalHead'>{GoalDetail.name}</h1>
            <h1>{GoalDetail.description}.</h1>
            <h1>{GoalDetail.cost}.</h1>
            <h1>{GoalDetail.amountsaved}</h1>
        </div>
    )
}

export default SpecificGoal
