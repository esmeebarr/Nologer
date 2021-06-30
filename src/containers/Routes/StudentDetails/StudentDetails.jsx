import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const [student, setStudents] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const thisID = id;
    fetch("http://localhost:8080/students")
      .then((response) => response.json())
      .then((jsonResponse) => setStudents(jsonResponse));
  }, [id]);

  return (
    <>
      <div className="cardContainer">
        <p>{student.firstName}</p>
        <p>{student.lastName}</p>
        <p>{student.age}</p>
        <p>{student.location}</p>
      </div>
    </>
  );
};

export default StudentDetails;
