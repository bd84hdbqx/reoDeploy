import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
import { patchUsers } from '../../user';

export default function MediaCard({elem}) {
  let localLogin=JSON.parse(localStorage.getItem("logins"))
  
  return (
    <Toolbar> <Grid item xs={3}>
    <Card style={{width:"200px",  flexWrap: "wrap", marginTop: "20px"}} >
   <CardMedia
     sx={{ height: 140 }}
     image="https://hips.hearstapps.com/seventeen/assets/16/12/1458835169-4071343-2895889394-the-a.jpg"

   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
     </Typography>
     <Typography variant="body2" color="text.secondary">
      {elem.username}
     </Typography>
   </CardContent>
   <CardActions>
     <Button size="small" onClick={()=>{
      console.log(elem)
    let userArr=elem.requests
    userArr.push(localLogin)
  console.log(userArr)
      
      fetch(`http://localhost:3000/users/${elem.id}`,{
        method: 'PATCH',
        body: JSON.stringify({
          requests: userArr,
         
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      
     }}>Follow</Button>
     <Button size="small">Block</Button>
   </CardActions>
 </Card>
 </Grid></Toolbar>
    
    
      
    
    
  );
}
