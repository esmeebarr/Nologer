import React from "react";
import "../StudentCreate.css";

const StudentCreate = () => {
  //stops the page from reloading
  const handleSubmit = (e) => {
    //get data from form into javascript object for us to send
    e.preventDefault();

    const requestBody = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      age: e.target[2].value,
      location: e.target[3].value,
      interests: [],
    };
    //console.log(requestBody);
  };
  // send it!
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  };
  fetch("http://localhost:8080/student", options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // 4. Show some indication that it's been sent/successful
      alert("Created a new user, yay!!");
    });

  return (
    <div>
      <h1>Create Student... </h1>
      <form onSubmit={handleSubmit} className="form">
        <label>First Name</label>
        <input type="text" name="firstName" placeholder="Enter a first Name" />
        <label>Last Name</label>
        <input type="text" name="lastName" placeholder="Enter a last Name" />
        <label>Age</label>
        <input type="text" name="age" placeholder="Enter an age" />
        <label>Location</label>
        <input type="text" name="location" placeholder="Enter a location" />
        <button type="sumbit" className="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default StudentCreate;
