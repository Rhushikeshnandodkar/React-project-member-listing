import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { resetPasswordConfirm } from '../features/Jobcard/userSlice'

function ResetPassConfirm() {
    const params = useParams()
    const dispatch = useDispatch()
    const {success} = useSelector((state) => ({...state.user}))
    const [formData, setFormData] = useState({
        password: "",
        password2 : ""
    })
    const onChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const uid = params.uid
    const token = params.token
    const {password, password2} = formData
    const onSubmit = (e) =>{
        e.preventDefault()
        dispatch(resetPasswordConfirm({uid, token, password, password2}))
        console.log(formData)
    }
  return (
    <div>
          <form onSubmit={(e) => onSubmit(e)}>
              <div className="input-field">
                  <input
                    type="password"
                    className="password"
                    name="password"
                    placeholder="Enter New password"
                    required
                    value={password}
                    onChange={(e) => onChange(e)}
                    minLength='6'
                  />

                  <i className="uil uil-eye-slash showHidePw"></i>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    className="password"
                    name="password2"
                    placeholder="Confirm New password"
                    required
                    value={password2}
                    onChange={(e) => onChange(e)}
                    minLength='6'
                  />

                  <i className="uil uil-eye-slash showHidePw"></i>
                </div>

                <div className="checkbox-text">
                  <div className="checkbox-content"></div>
                </div>

                <div className="input-field button">
                  <input type="submit" value="Reset Password" />
                </div>
              </form>
    </div>
  )
}

export default ResetPassConfirm
