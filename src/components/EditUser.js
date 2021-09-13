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
    const [amountSaved, setAmountSaved] = useState(null)

    useEffect(() => {
        loadUsers();
    }, [])

    let loadUsers = async () => {
        const result = await axios.get(`http://localhost:8000/user/${id}`);
        console.log(result.data.name);

        setName(result.data.name);
        setDescription(result.data.description);
        setAmountSaved(result.data.amountSaved);
       }
    const updateSingleUser = async () => {
        let formField = new FormData()

        formField.append('name',name)
        formField.append('description',description)
        formField.append('amountSaved',amountSaved)
        if(name !== null) {
          formField.append('name', name)
        }

        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/user/${id}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push("/");
        })
    }

    return (
        <div>

            

        </div>
    )
}

export default Edit
