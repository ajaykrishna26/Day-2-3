import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ApiGet = () => {
   var [data, setData] = useState([]);
   // axios syntax || axios.gey("Api").then().catch();
//useeEffect|| useEffect(()=>{},[])
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res);
        setData(res.data)
    })
    .catch((error)=>{
        console.log(error);
    })
},[])
    
  return <div>
    <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>contact</TableCell>
                <TableCell>email</TableCell>
                <TableCell>website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data.map((value,index)=>{
            return(
                <TableRow key={index}>
                     <TableCell>{value.name}</TableCell>
                     <TableCell>{value.Contact}</TableCell>
                     <TableCell>{value.email}</TableCell>
                     <TableCell>{value.website}</TableCell>
                </TableRow>
            )
          })}  
            </TableBody>    
        </Table>
    </TableContainer>  
    </div>
  
}

export default ApiGet
