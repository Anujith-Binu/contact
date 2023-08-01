import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './Cards';


function Home() {

  // state to hold the data
     const [contacts,setContacts]=useState([])

    // api to get data from db.json
    const fetchContact = async ()=>{
      var result = await fetch('/db.json')
      // convert to js
      result.json().then(data=>setContacts(data.contacts))
    }
    console.log(contacts);

    useEffect(()=>{
      fetchContact()
    },[])

  return (
    <div>
               <Cards data={contacts}></Cards>
      </div>
  )
}

export default Home
