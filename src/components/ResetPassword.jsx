import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { resetPassword } from '../features/Jobcard/userSlice'
import Thanks from './Thanks'

function ResetPassword() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {success, error} = useSelector((state) => ({...state.user}))
    console.log(error)
    const [formData, setFormData] = useState({email: "", })
    const onChange  = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(email)
        dispatch(resetPassword(email))
        if(success == true){
            navigate('/thanks')
        }
    }
    const {email} = formData
  return (
    <div>
        <div className="errormessage">
            {!success && error ? <p>your email is not registered</p>: <p></p>}
        </div>
        {success ? <div>password reset link sent</div> :  <form action="" onSubmit={(e) => onSubmit(e)}>
        <input type="text" placeholder='enter email' name='email' value={email} onChange={(e) => onChange(e)}/>
        <input type="submit" value="Reset Password" />
      </form>}
     
    </div>
  )
}

export default ResetPassword
