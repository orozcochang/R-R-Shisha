import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './containers/Home'
import Login from './containers/Login'
import ResetPassword from './containers/ResetPassword'
import ResetPasswordConfirm from './containers/ResetPasswordConfirm'
import Activate from './containers/Activate'
import Signup from './containers/Signup'
import Layout from './hocs/Layout'


function App() {


  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
            <Route path='/activate/:uid/:token' element={<Activate />} />
          </Routes>
        </Layout>

      </Router>
      </>
      )
}

      export default App
