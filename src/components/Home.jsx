import React from 'react'
import { useState, useEffect } from 'react'
import { HomepageStyle } from './component.style';
import Navbar from '../Molecules/Navbar';

function Home() {
    const [member, setMember] = useState([]);
    useEffect(() =>{
        fetch('https://siaserver.pythonanywhere.com/api/')
        .then((res) => res.json())
        .then((data) => {
            setMember(data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }, [])
  return (
    <div>
        <Navbar/>
        {member && 
        member.map((data) =>(
            <h2>{data.name}</h2>
        ))}
    </div>
  )
}

export default Home
