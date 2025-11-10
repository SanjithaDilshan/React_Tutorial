import React, { useState } from "react";
import StudentCard from "./components/StudentCard"; // make sure path is correct
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [text, setText] = useState(10);

  const searchChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  return (
    <div>
      <h1>My React App</h1>
      <SearchBar onSearch={searchChange} />

      <div>
        <p id="sample text">{text}</p>
        <p id="sample text-2"></p>
      </div>
      <StudentCard name="Amal" age={20} homeTown="Gampaha" />
      <StudentCard name="Kamal" age={25} homeTown="Colombo" />
      <StudentCard name="Nimal" age={18} homeTown="Negombo" />
    </div>
  );
}

export default App;
