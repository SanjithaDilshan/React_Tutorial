import React from "react";
import Student from "../components/Student";
import PropTypes from "prop-types";

const StudentCard = ({ name, age, homeTown }) => {
  return (
    <div className="st-card">
      <img
        src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_4938811.png"
        alt={"Student Image_${name}"}
        className="student-image"
      />
      {/* <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{homeTown}</h3> */}
      <Student name={name} age={age} homeTown={homeTown} />
    </div>
  );
};

StudentCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  homeTown: PropTypes.string,
};

export default StudentCard;
