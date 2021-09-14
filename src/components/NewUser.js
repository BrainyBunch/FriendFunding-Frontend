import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

function NewUser() {
    let history = useHistory();

    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const [amountsaved, setAmountsaved] = useState(null)


    const addUser = async () => {
        let formField = new FormData()
        formField.append('name',name)
        formField.append('description',description)
        formField.append('amountsaved',amountsaved)

        await axios({
          method: 'post',
          url:'http://localhost:8000/users',
          data: formField
        }).then(response=>{
          console.log(response.data);
          history.push('/')
        })
    }
    return (
        <div>
            <h1>Done for all intensive purposes</h1>
            <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
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
              placeholder="Saved so far"
              name="amountsaved"
              value={amountsaved}
              onChange={(e) => setAmountsaved(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={addUser}>Add User</button>
        </div>
    )
}

export default NewUser
