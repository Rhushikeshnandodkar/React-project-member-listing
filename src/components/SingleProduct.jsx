import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Navbar from '../Molecules/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleJobcard } from '../features/Jobcard/jobCardSlice';
function SingleProduct() {
  const {id} = useParams()
  const [member, setMember] = useState([]);
  const dispatch = useDispatch()
  useEffect(() =>{
      // fetch(`https://siaserver.pythonanywhere.com/api/detail/${id}`)
      // .then((res) => res.json())
      // .then((data) => {
      //     setMember(data)
      // })
      // .catch((err) => {
      //     console.log(err.message)
      // })
      dispatch(fetchSingleJobcard(id))
  }, [])
  const state = useSelector((state) => state)
  return (
    <div>
      <Navbar/>
      {
        state.jobcard.data ? <h3>{state.jobcard.data.name}</h3> : <h4>Loading....</h4>
        }
    </div>
  )
}

export default SingleProduct
