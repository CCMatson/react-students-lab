import Student from "./Student";

const StudentList = (props) => {
  return ( 
<>
<div>
  <div>
    {props.studentList.map(student => <Student key={student.name} student={student} />)}
    </div>
</div></>

  );
}

export default StudentList;