import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useState, useEffect } from "react";
import {useHistory, useParams} from 'react-router-dom'


function Edit() {
    let history = useHistory();
    const { id } = useParams();

    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [amountsaved, setAmountsaved] = useState(null)

    useEffect(() => {
        loadUsers();
    }, []);

    let loadUsers = async () => {
        const result = await axios.get(`http://localhost:8000/user/${id}`);
        console.log(result.data.name);

        setName(result.data.name);
        setDescription(result.data.description);
        setAmountsaved(result.data.amountsaved);
       }
    const updateUser = async () => {
        let formField = new FormData()

        formField.append('name',name)
        formField.append('description',description)
        formField.append('amountsaved',amountsaved)
        // if(name !== null) {
        //   formField.append('name', name)
        // }

        await axios({
            method: 'PUT',
            url: `http://localhost:8000/user/${id}`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push("/");
        })
    }

    return (
        <div>
            <h1>Done for all intensive purposes</h1>
            <div className="form-group">
                <input
                    type="text"
                    // className="form-control form-control-lg"
                    placeholder="Enter Your Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
      </div>
            <div className="form-group">
                <input
                    type="description"
                    className="form-control form-control-lg"
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="How Much You've Saved So Far"
                    name="amountsaved"
                    value={amountsaved}
                    onChange={(e) => setAmountsaved(e.target.value)}
                />
      </div>
      <button onClick={updateUser} className="btn btn-primary btn-block">Update User</button>

            

        </div>
    )
}

export default Edit
