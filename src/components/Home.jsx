import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchJobcards, fetchSingleJobcard, searchJobcards } from '../features/Jobcard/jobCardSlice'
import { HomepageStyle } from './component.style'
import Cards from '../Molecules/Cards'
import { Link } from 'react-router-dom'
import Loader from '../Molecules/Loader'
import Navbar from '../Molecules/Navbar'
import { getUser } from '../features/Jobcard/userSlice'
function Home() {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const {jobcards, isLoading, iserror} = useSelector((state) => ({
        ...state.jobcard
    }))
    const {user, isAuthenticated} = useSelector((state) => ({
      ...state.user
    }))
    console.log(jobcards)
    useEffect(() => {
        console.log("reloaded")
        dispatch(fetchJobcards())
        dispatch(getUser())
      }, [dispatch])
      
      const handleSubmit = (event) =>{
        console.log("search")
      }
      const handleInputChange = (e) => {
        const searchItem = e.target.value;
        setSearch(searchItem)
        dispatch(searchJobcards(search))
    }
  return (
    <div>
        <Navbar user={user} />
        <HomepageStyle>
        <form className='form' onSubmit={handleSubmit}><input type="text" value={search} placeholder='Search anything'  onChange={handleInputChange}/></form>
    <div className="products-cards">
      {isLoading ? <Loader/>: (jobcards && jobcards.map((data) => (
        <>
        <Cards data={data}/>
    </>
      )))}
    </div>
        </HomepageStyle>
    </div>
  )
}
export default Home

