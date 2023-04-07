import React from 'react';
import './profile.css'
import { useState } from 'react';

export default function MyProfile(){

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const submission = (event) => {
        event.preventDefault();
        console.log(inputs)
    }
    return(
        <div>
            <center>
                <h1>REGISTRATION FORM</h1>
                <form onSubmit={submission}>
                    <label>LAST NAME: </label>
                    <input type="text" name='lastName' value={inputs.lastName || ""} onChange={handleChange}/>

                    <br/>

                    <label>FIRST NAME: </label>
                    <input type="text" name='firstName' value={inputs.firstName || ""} onChange={handleChange}/>

                    <br/>

                    <label>MIDDLE NAME: </label>
                    <input type="text" name='middleName' value={inputs.middleName || ""} onChange={handleChange}/>

                    <br/>

                    <button>REGISTER</button>
                </form>
            </center>
        </div>
    );
}
