import Student from "../components/Student";

const StudentCard = ({ name, age, homeTown }) => {
  return (
    <div>
      <img
        src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_4938811.png"
        alt="Student Image"
        className="student-image"
      />
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{homeTown}</h3>
      <Student />
    </div>
  );
};

export default StudentCard;
