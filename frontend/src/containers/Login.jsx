import React from "react";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

function Login() {
    const [formData, setFormData] = useState({
        'email': '',
        'password': ''
    })
    const { email, password } = formData
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault()
        //login(email, password)
    }

    return (
        <div className="container mt-5">
            <h1>Sign in</h1>
            <p>Sign in to your account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input className="form-group"
                        type='email'
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required />
                </div>
                <div className="form-group">
                    <input className="form-group"
                        type='password'
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required />
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <p className="mt-3">Don't have an account? <Link to='/signup'>Sign Up</Link></p>
            <p>Forgot your password? <Link to='/reset-password'>Reset Password</Link></p>
        </div>
    )
}

export default connect(null, { })(Login)