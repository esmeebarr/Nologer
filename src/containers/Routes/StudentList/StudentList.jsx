import React, { useState } from "react";

const StudentList = () => {

  return (
    <>
    <Router>
      <div className="CardContainer">
        <h1>Students</h1>
        <p>{info.firstName}</p>
        <Link to "/esmee">
          <StudentCard name="Esmee"/>
        <Link to "/alex">
          <StudentCard name="Alex"/>
        <Link to "/may">
          <StudentCard name="May"/>
        <Link to "/sakeen">
          <StudentCard name="Sakeen"/>
       <Link to "/ed">
          <StudentCard name="Ed"/>
        <Link to "/clint">
          <StudentCard name="Clint"/>
      
      <Switch>
        <Route path="/info" children={<StudentDetails/>}/>
      </Switch>
      </div>
      </Router>
    </>
  );
};

export default StudentList;
