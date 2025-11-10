import React from "react";
import StudentCard from "./components/StudentCard"; // make sure path is correct
import "./App.css";

function App() {
  const handleChange = (event) => {
    console.log(event.target.value); // fixed typo
  };

  const students = [
    { name: "Amal", age: 20, homeTown: "Gampaha" },
    { name: "Kamal", age: 25, homeTown: "Colombo" },
    { name: "Nimal", age: 18, homeTown: "Negombo" },
  ];

  return (
    <div>
      <h1>My React App</h1>
      <input type="text" id="normal-text-2" onChange={handleChange} />
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          homeTown={student.homeTown}
        />
      ))}
    </div>
  );
}

export default App;
