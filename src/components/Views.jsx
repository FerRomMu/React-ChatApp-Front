import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login/Login"
import Signup from "./login/Signup"
import Home from "./home/Home"
import React, { useEffect, useState } from 'react';
import Index from "./Index"

const Views = () => {
  const [token, setToken] = useState('')

  useEffect(() => {
    const storedToken = window.localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <Routes>
      <Route 
        path="/" 
        element={ token? 
          <Navigate to="/home"/> : <Login setToken={ setToken }/>
        }
      />
      <Route 
        path="/register" 
        element={ token?
          <Navigate to="/home"/> : <Signup setToken={ setToken } />
        }
      />
      <Route 
        path="/home" 
        element={ token?
          <Home token={token} setToken={ setToken } /> :
          <Navigate to="/"/>
        }
      />
      <Route 
        path="*" 
        element={ token?
          <Index token={token} setToken={ setToken } /> :
          <Navigate to="/"/>
        }
      />
    </Routes>
  )
};

export default Views