import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Formbasics = () => {
    var [inputs, setinputs] = useState({ username: "",email:"",place:""});
    const inputHandler = (e) => {
        console.log(e.target.value);
        setinputs({ ...inputs, [e.target.name]: e.target.value});
        console.log(inputs);
    };
  return (
    <div style={{marginTop:'10%',marginLeft:'45%'}}>
      <TextField
       variant='outlined' 
       label="username" 
       onChange={inputHandler} 
       name="username"
       value={inputs.username}
       />
       <TextField
       variant='outlined' 
       label="place" 
       onChange={inputHandler} 
       name="place"
       value={inputs.place}
       />
    <Button variant="contained" >form</Button>
    </div>
  )
}

export default Formbasics
