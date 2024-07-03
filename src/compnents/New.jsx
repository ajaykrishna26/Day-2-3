import { Button,Rating,Typography } from '@mui/material';
import React, { useState } from 'react';

const New = () => {
  var [data,setData] = useState("click the button");
  const home = () => {
    console.log("Home");
    setData("Home")
  };
  const gallery = () => {
    console.log("gallery");
    setData("gallery")
  };
  const Contact = () => {
    console.log("contact");
    setData("contact")
  };
  const [value, setValue] = React.useState(2);
  return (
    <div style ={{ marginleft: "45%",marginTop: "10", textAlign: "centre" }}>
      <Typography variant="h4">welcom to {data}</Typography>
      <br />
      <br />
      <Button variant='contained' onClick={home}>Home</Button>&nbsp;&nbsp;
      <Button variant='contained' color ="secondary" onClick={gallery}>gallery</Button>&nbsp;&nbsp;
      <Button variant='contained' color ="error" onClick={Contact}>Contact</Button>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
       <Typography component="legend">Read readOnly</Typography>
       <Rating name="read-only" value={value} readOnly />
    </div>
  );
};

export default New
