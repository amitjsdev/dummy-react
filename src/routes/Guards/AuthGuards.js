import React, { Component, useState } from "react";
import {
    Routes,
    Route,
    BrowserRouter,
    Link,
    Navigate,
    Outlet
  } from "react-router-dom";

const AuthGuards = () => {
    const [isAuthenticated,setIsAuthenticated] = useState(true)
    // isAuthenticated = true;
  return (
    isAuthenticated ? <Outlet /> : ''

  );
};


export default AuthGuards;
