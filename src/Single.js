import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';


function Single() {

    const [allUser,setUser]=useState([])

    const params=useParams()
    const getUser=async(uid)=>{
       const result= await fetch(`/db.json`)
       result.json().then(data=>{
        setUser(data.contacts);
       })
    }

    useEffect(()=>{
        getUser()
        // console.log(params.id);
    },[])
    const singleUser= allUser.find(i=>i.id==params.id)
    console.log(singleUser);

  return (
    <div className='text-center'>
        {
            singleUser?
            <div>
                        <h1>{singleUser.username}</h1>
        <img className='mt-3 w-2' src={singleUser.profile}  />
        <ListGroup className='w-50 container mt-5 mb-5 p-5'>
      <ListGroup.Item>{singleUser.place}</ListGroup.Item>
      <ListGroup.Item>{singleUser.email}</ListGroup.Item>
      <ListGroup.Item>{singleUser.mobile}</ListGroup.Item>
    </ListGroup>
            </div> : <h1>no user found</h1>
        }
    </div>
  )
}

export default Single
