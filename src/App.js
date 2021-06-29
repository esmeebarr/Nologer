import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import StudentList from "./containers/Routes/StudentList/StudentList";
import StudentDetails from "./containers/Routes/StudentDetails/StudentDetails";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes/Routes";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;

//
//
//
//
//
