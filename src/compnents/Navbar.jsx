import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
             <Typography variant="h6"compontent="div" sx={{flexGrow: 1 }}>
             Myapp
             </Typography>
            
             <Button><Link to={'/r'} style={{textDecoration:"none",color:"white"}}>Registrationr</Link></Button>
             <Button><Link to={'/t'} style={{textDecoration:"none",color:"white"}}>Table</Link></Button>
             <Button><Link to={'/'} style={{textDecoration:"none",color:"white"}}>First</Link></Button>
             <Button><Link to={'/s'} style={{textDecoration:"none",color:"white"}}>Statebasic</Link></Button>
             <Button><Link to={'/c'} style={{textDecoration:"none",color:"white"}}>Count</Link></Button>
             <Button><Link to={'/q'} style={{textDecoration:"none",color:"white"}}>New</Link></Button>
             <Button><Link to={'/w'} style={{textDecoration:"none",color:"white"}}>Formbasics</Link></Button>
             <Button><Link to={'/y'} style={{textDecoration:"none",color:"white"}}>ApiGet</Link></Button>
             <Button><Link to={'/k'} style={{textDecoration:"none",color:"white"}}>Jewelery</Link></Button>
            </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar
