import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import StudentDetails from "../StudentDetails/StudentDetails";
import "../StudentList.css";

const StudentList = () => {
  const handleDelete = (e) => {
    e.preventDefault();

    const options = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    };
  };

  return (
    <>
      <Route>
        <div className="CardContainer">
          <h1>Students</h1>
          {/* <p>{id.firstName}</p> */}
          <Link to="/esmee">
            <StudentDetails name="Esmee" />
          </Link>
          <Link to="/alex">
            <StudentDetails name="Alex" />
          </Link>
          <Link to="/may">
            <StudentDetails name="May" />
          </Link>
          <Link to="/sakeen">
            <StudentDetails name="Sakeen" />
          </Link>
          <Link to="/carlito">
            <StudentDetails name="Ed" />
          </Link>
          <Link to="/clint">
            <StudentDetails name="Clint" />
          </Link>
          <Switch>
            <Route path="/info" children={<StudentDetails />} />
          </Switch>
        </div>
      </Route>
    </>
  );
};

export default StudentList;
