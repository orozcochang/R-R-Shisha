import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Home