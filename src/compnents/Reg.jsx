
import React, { useState } from  'react'
import {Button, TextField,Typography} from '@mui/material'



const Reg = (props) => {
console.log(props.data.Name)
var [val, setVal] = useState({
  Name: props.data.Name,
  age: props.data.age,
  place: props.data.place,
});
  return (
    <div>
        <h4>Registration Form</h4>
        <TextField variant='outlined' label="Name*"></TextField>
        <br></br>
        <TextField variant='outlined' label="Age"></TextField>
        <br></br>
        <TextField variant='outlined' label="Email*"></TextField>
        <br></br>
        <TextField variant='outlined' label="Father Nmae"></TextField>
        <br></br>
        <TextField variant='outlined' label="Mother Name"></TextField>
        <br></br>
        <TextField variant='outlined' label="Password"></TextField>
        <br></br>
        <TextField variant='outlined' label="Cofirm Password"></TextField>
        <br></br>
        <Button variant='contained'>submit</Button>
      
    </div>
  )
}

export default Reg