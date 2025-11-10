import React, { useState } from "react";
import StudentCard from "./components/StudentCard"; // make sure path is correct
import "./App.css";

function App() {
  const [text, setText] = useState(20);

  // const input = document.getElementById("normal-text-2");
  // input.addEventListener("input", function () {
  //   console.log(input.value);
  // });
  let x = 1000;
  const handleChange = (event) => {
    console.log(event.target.value);
    // const sampleText = document.getElementById("sample text");
    // sampleText.innerHTML = event.target.value; // fixed typo

    // const students = [
    //   { name: "Amal", age: 20, homeTown: "Gampaha" },
    //   { name: "Kamal", age: 25, homeTown: "Colombo" },
    //   { name: "Nimal", age: 18, homeTown: "Negombo" },
    // ];
    x = event.target.value;
    console.log(x);
    setText(event.target.value);
  };

  return (
    <div>
      <h1>My React App</h1>
      <input type="text" id="normal-text-2" onChange={handleChange} />

      <div>
        <p id="sample text">{text}</p>
        <p id="sample text-2">{x}</p>
      </div>

      {/* {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          homeTown={student.homeTown}
        />
      ))} */}
      <StudentCard name="Amal" age={20} homeTown="Gampaha" />
      <StudentCard name="Kamal" age={25} homeTown="Colombo" />
      <StudentCard name="Nimal" age={18} homeTown="Negombo" />
    </div>
  );
}

export default App;
