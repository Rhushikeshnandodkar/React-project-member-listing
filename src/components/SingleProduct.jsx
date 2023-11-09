import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Navbar from '../Molecules/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleJobcard } from '../features/Jobcard/jobCardSlice';
import Loader from '../Molecules/Loader';
function SingleProduct() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {singleJobcard, isLoading, iserror} = useSelector((state) => ({
    ...state.jobcard
  }))

  useEffect(() =>{
      dispatch(fetchSingleJobcard(id))
  }, [])
  return (
    <div>
      <Navbar/>
      {
        isLoading ? <Loader/> : (singleJobcard && <h3>{singleJobcard.name}</h3>) 
        }
    </div>
  )
}

export default SingleProduct
