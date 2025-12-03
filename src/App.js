import React, { Component, useState } from "react";
import StudentCard from "./components/StudentCard"; // make sure path is correct
import SearchBar from "./components/SearchBar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  searchChange = (event) => {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  };

  render() {
    const studentList = [
      { name: "Amal", age: 20, town: "Gampaha" },
      { name: "Kamal", age: 25, town: "Colombo" },
      { name: "Nimal", age: 18, town: "Negombo" },
    ];

    const searchedStudent = studentList.filter((student) =>
      student.name.toLowerCase().includes(this.state.text.toLowerCase())
    );

    return (
      <div>
        <h1>My React App</h1>
        <SearchBar onSearch={this.searchChange} searchText={this.state.text} />

        <div>
          <p id="sample text">{this.state.text}</p>
          <p id="sample text-2"></p>
        </div>

        {searchedStudent.map((student, index) => {
          return (
            <StudentCard
              key={index}
              name={student.name}
              age={student.age}
              homeTown={student.town}
            />
          );
        })}
      </div>
    );
  }
}

// function App() {
//   const [text, setText] = useState("");

//   return (

//   );
// }

export default App;
