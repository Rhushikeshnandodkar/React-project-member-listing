import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../features/Jobcard/userSlice'
import { Navigate, useNavigate } from 'react-router-dom'
function UserLogin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, userToken} = useSelector((state) => ({
    ...state.user
  }))
  const[formData, setFormData] = useState({
    username : "",
    password : ""
  })
  const onChange = (e) =>{
    const {name, value} = e.target 
    setFormData({...formData, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(formData)
    console.log("submitted")
    const {username, password} = formData
    dispatch(userLogin({username, password}))
  }
  if(user && userToken){
    return navigate("/")
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" id='username' name='username' value={formData.username} onChange={onChange}/>
        <input type="password" id='password' name="password" value={formData.password} onChange={onChange}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default UserLogin
