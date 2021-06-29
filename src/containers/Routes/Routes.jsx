import React from "react";
import StudentList from "./StudentList/StudentList";
import StudentDetails from "./StudentDetails/StudentDetails";
import { Switch, Routes } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <StudentList />
        </Route>
        <Route path="/student">
          <StudentDetails />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
