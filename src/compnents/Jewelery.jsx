import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Jewelery = () => {
    var[pro,setPro] = useState([]);
    useEffect(()=> {
        axios.get("https://fakestoreapi.com/products/category/jewelery")
        .then((res)=>{
            console.log(res);
            setPro(res.data)
        })
        .catch((error)=>{
            console.log(error);  
    }),[]})
  return (
    <div style={{margin:'4%'}}>
        <Grid condainer spacing={2}>
            {pro.map((val, i)=> {
              return (
                <Grid iteam xs={12} md={3}>
                  <Card sx={{ maxWidth: 345 }}>
                     <CardMedia
                       sx={{ height: 140 }}
                       image={val.image}
                    />
                 <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                    {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {val.price}
                  </Typography>
                </CardContent>
                <CardActions>
                     <Button size="small">Share</Button>
                     <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>

              )          
          })}    
        </Grid>
    </div>
  )
}

export default Jewelery
