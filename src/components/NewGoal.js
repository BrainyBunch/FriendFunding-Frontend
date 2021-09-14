import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
// import "../App.css";

const NewGoal = ({setInput, input, props}) => {
  console.log(setInput)
  console.log(input)

  const initialState = { title: "", description: "", cost: "", amountSaved: "", user: input.data.id};
  // add user name if goal.user== username then goal.user =
  const [GoalState, setGoalState] = useState(initialState);

  const [status, setStatus] = useState("failed");
//   let history = useHistory()

  const handleChange = (event) => {
    console.log(event.target.value);
    setGoalState({ ...GoalState, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(workoutState);

    const newGoal = {
      title: GoalState.title,
      description: GoalState.description,
      cost: GoalState.cost,
      amountsaved: GoalState.amountsaved,
      user: input.data.id
    };
    axios.post("http://localhost:5000/goal", newGoal,  {
      method: "post",
      credentials: "include",
      headers: {
        'Content-Type':'application/json'
      }, 
      // body: JSON.stringify({Goals})
    })
    .then((res) => {   
      setGoalState(res.data);
      console.log(res.data);
    });

    // history.push("/Goals")
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 class="GoalTitle">--- New Goal! ---</h1>
      <div class="grid">
        <label htmlFor="title" class="titleLabel">
          Title of Goal:
        </label>
        <input
          name="title"
          id="title"
          type="text"
          onChange={handleChange}
          value={GoalState.title}
          placeholder="Ex: Hawaii, ... "
        />

        <label htmlFor="description" class="des">
          Description:
        </label>
        <input
          name="description"
          id="description"
          type="text"
          onChange={handleChange}
          value={GoalState.description}
          placeholder="Ex: Visit O'ahu, Hawaiian Food, ... "
        />

        <label htmlFor="Cost" class="costLabel">
          Total Cost:
        </label>
        <input
          name="Cost"
          id="Cost"
          type="integer"
          onChange={handleChange}
          value={GoalState.Cost}
          placeholder="Ex: $5000"
        />

        <label htmlFor="amountSaved" class="savedLabel">
          Total Amount Saved:
        </label>
        <input
          name="amountSaved"
          id="amountSaved"
          type="integer"
          onChange={handleChange}
          value={GoalState.amountSaved}
          placeholder="Ex: $1200"
        />
        <button type="submit" class="subBut">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewGoal;
