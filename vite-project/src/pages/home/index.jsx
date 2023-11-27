import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card'
import { getAllUsers } from '../../user'
import { v4 as uuidv4 } from 'uuid';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from '../../layout/header';
function Home({isLogin,setLogin}) {
  const [user,setUser]=useState([])
  useEffect(()=>{
    getAllUsers().then((res)=>{
      console.log(res)
      setUser(res)
    })
  
  },[])
  return (
    <>
    <Header isLogin={isLogin} setLogin={setLogin}/>
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: "20px" }}>
        <Grid container spacing={1}>
    {
      user && user.map((elem)=>{
        return <Card key={uuidv4} elem={elem}/>
        
      })
    }
    </Grid></Box>
    </>
  )
}

export default Home