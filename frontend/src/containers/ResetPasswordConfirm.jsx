import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from 'react-redux'
import { reset_password_confirm } from "../actions/auth";
function ResetPasswordConfirm({ reset_password_confirm }) {
    let loc = window.location.pathname
    loc = loc.split('/')
    const uid = loc[4]
    const token = loc[5]
    const [requestSent, setRequestSent] = useState(false)
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    })
    const { new_password, re_new_password } = formData
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault()
        reset_password_confirm(uid, token, new_password, re_new_password)
        setRequestSent(true)
    }

    if (requestSent) {
        return <Navigate to='/' />
    }
    
    

    return (
        <div className="container mt-5">
            <p>Enter your new password</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group mt-1">
                    <input className="form-group"
                        type='password'
                        placeholder="New Password"
                        name="new_password"
                        value={new_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required />
                </div>
                <div className="form-group mt-1">
                    <input className="form-group"
                        type='password'
                        placeholder="Confirm New Password"
                        name="re_new_password"
                        value={re_new_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required />
                </div>

                <button className="btn btn-primary mt-1" type="submit">Reset Password</button>
            </form>
        </div>
    )
}


export default connect(null, { reset_password_confirm })(ResetPasswordConfirm)