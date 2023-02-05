import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function Home() {
    return (
        <div className="container">
            <div class="p-5 mb-4 bg-light rounded-3 mt-5">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Welcome to R&R シーシャ!</h1>
                    <hr/>
                    <p class="col-md-8 fs-4">Click the log in button to continue.</p>
                    <Link to="/login"><button class="btn btn-primary btn-lg" type="button">Login</button> </Link>
                </div>
            </div>
        </div>
    )
}

export default Home