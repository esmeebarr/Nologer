import React from "react";
import StudentList from "./StudentList/StudentList";
import StudentDetails from "./StudentDetails/StudentDetails";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <StudentList />
      </Route>
      <Route path="/student/:studentID">
        <StudentDetails />
      </Route>
    </Switch>
  );
};

export default Routes;
