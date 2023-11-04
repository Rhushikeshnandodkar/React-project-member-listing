import React from 'react'
import { useState, useEffect } from 'react'
import { HomepageStyle } from './component.style';
import Navbar from '../Molecules/Navbar';
import { Link } from 'react-router-dom';
import Cards from '../Molecules/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobcards } from '../features/Jobcard/jobCardSlice';
function Home() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    if(state.jobcard.isLoading){
        return <h1>Loading..</h1>
    }
    return (
        <div className="app">
            {state.jobcard.data.map((e) => (
                <h4>{e.name}</h4>
            ))}
        </div>
    )
}

export default Home
