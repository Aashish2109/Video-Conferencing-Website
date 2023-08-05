import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [roomID,setroomID]=useState();
    const navigate=useNavigate();
    const handleJoin=(()=>
    {
        navigate(`/room/${roomID}`)
    })
  return (
    <div>
    <input type="text" placeholder='enter room id' value={roomID} onChange={(e)=>setroomID(e.target.value)}/>
    <button onClick={handleJoin}>Join</button>
    </div>
  )
}

export default Home