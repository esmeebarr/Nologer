import React, {useState} from "react";

const StudentDetails = () => {
  
  const [student, setStudents] = useState({});

  useEffect(() => {
    const info;
    .fetch("http://localhost:8080/students")
      .then((response) => response.json())
      .then((jsonResponse) => setStudents.(jsonResponse));
   
  }, [info])



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
