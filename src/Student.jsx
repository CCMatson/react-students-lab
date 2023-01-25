// import { studentData } from "./data";
import Scores from "./Scores";

const Student = ({student}) => {
  return ( 
<>
<div>
  <h1>{student.name}</h1> 
  {student.bio}
  < Scores scores={student.scores} />
  </div></>
  );
}

export default Student;