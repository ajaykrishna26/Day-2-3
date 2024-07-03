import {Button, TextField,Typography} from '@mui/material'

const First = () => {
  return (
    <div>
      <h1>Login page</h1>
      <input type='text' placeholder='Username'/>
       <br></br>
      <input type='password' placeholder='password'/>
      <br></br>
      <button>login</button>
      <br></br>

      <Typography variant="h3">Login page</Typography>
      <br></br>
      <TextField variant="outlined" label='username'/>
      <br></br>
      <TextField variant="filled" label='password'/>
      <br></br>
      <TextField variant="standard" label=' confirm password'/>
      <br></br>
      <Button variant='text'>text</Button>&nbsp;
      <Button variant='Contained' color="success">Submit</Button>
      <Button variant='outlined' color="error">Login</Button>&nbsp;&nbsp;
      <Button variant="contained" color="success">Login</Button>&nbsp;&nbsp;
      <Button href="#text-buttons">link</Button>&nbsp;
    </div>
  );
};

export default First
