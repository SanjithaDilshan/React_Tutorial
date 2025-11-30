import React, { useState } from "react";
import PropTypes from "prop-types";

const Student = ({ name, age, homeTown }) => {
  const [newAge, setNewAge] = useState(age);

  const handleWheel = (event) => {
    console.log(event.deltaY);

    if (event.deltaY > 0) {
      console.log("Mouse scrolled to down");
      setNewAge(newAge - 1);
    } else {
      console.log("Mouse scrolled to up");
      setNewAge(newAge + 1);
    }
  };

  return (
    <div>
      <h3>{name}</h3>
      <h3 onWheel={handleWheel}>{newAge}</h3>
      <h3>{homeTown}</h3>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  homeTown: PropTypes.string,
};

export default Student;
