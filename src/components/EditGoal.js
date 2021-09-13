import axios from "axios";
import React, { useState, useEffect } from "react";
import Goals from "./Goals";
import { Route, Link, useHistory } from "react-router-dom";
import App from "../App";
// import "./EditWorkout.css";

const EditGoal = ({ match }) => {
  const initialState = { title: "", description: "", cost: "", amountSaved: "", user: ""};
  const [GoalState, setGoalState] = useState([]);
//   let history = useHistory();

  const handleChange = (event) => {
    console.log(event.target.value);
    setGoalState({ ...GoalState, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    const id = match.params.id;
    console.log(id);
    axios.get(`http://localhost:8000/goal/${id}`).then((res) => {
      console.log(res);
      setGoalState(res.data);
    });
  }, []);

  const updateSubmit = (event) => {
    event.preventDefault();
    console.log(GoalState);
    const id = match.params.id;

    axios
      .put(`http://localhost:8000/goal/${id}`, GoalState)
      .then((res) => {
        console.log(res.data);
        setGoalState(res.data.workout);
        // history.push("/goal_list");
      });
  };

  return (
    <div>
      <Link to={"/"}> Back</Link>
      <form onSubmit={updateSubmit}>
        <div class="gGrid">
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
    </div>
  );
};

export default EditGoal;
