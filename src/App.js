import './App.css';
import { useState } from 'react';
import { studentData } from './data'; 
import Student from './Student';


function App() {
  const [student, setStudent] = useState(studentData)
  return (
    <div className="App">
      {student.map(student => <Student key={student.name} student={student} />)}
    </div>
  );
}

export default App;
