import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    // useState
    var [name,setName] = useState("ajay");
    var[data ,setdata] = useState();
    const inputHandler = (e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    const changeName = () =>{
        console.log("btn clicked");
        setdata(name)
    };
  return (
    <div style={{marginLeft:'50%',marginTop:'10%'}}>
      <Typography variant='h3'>Hello {data}</Typography>
      <br />
      <TextField variant='outlined' onChange={inputHandler}/>
      <br></br>
      <Button variant='condained' onClick={changeName}>change</Button>

    </div>
  )
}

export default Statebasic
