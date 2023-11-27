import React from 'react'
import Header from '../../layout/header';
import Card2 from '../../Components/Card2';

function Request() {
  let localLogin=JSON.parse(localStorage.getItem("logins"))
  return (
   
    <>
    <Header/>
    {localLogin&&
      localLogin.requests && localLogin.requests.map((elem,idx)=>{
        return <Card2 key={idx} elem={elem}/>

      })
    }
    
    
    </>
  )
}

export default Request