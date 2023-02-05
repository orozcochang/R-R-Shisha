import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux'
import { verify } from "../actions/auth";
function Activate({ verify }) {
    const [verified, setVerified] = useState(false)
    let loc = window.location.pathname
    loc = loc.split('/')
    const uid = loc[2]
    const token = loc[3]
    const verifyAccount = () => {
        verify(uid, token)
        setVerified(true)
    }

    if (verified) {
        return <Navigate to='/' />
    }

    return (
        <div className="container mt-5">
            <div className="d-flex fflex-column justify-content-center algin-items-center" style={{ marginTop: '200px' }}>
<h1>Verify your account</h1>
<button onClick={verifyAccount} style={{marginTop:'50px'}} type='button' className="btn btn-primary">Verify</button>

            </div>
        </div>
    )
}



export default connect(null, { verify })(Activate)