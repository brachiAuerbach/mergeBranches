import { useState } from 'react'
import './App.css'
import NewProfile from './components/NewProfile'
import ProfileCard from './components/ProfileCard'

function App() {

  const [students, setStudents] = useState([
    {
      name: "Yosef",
      age: 18,
      hobby: "learn"
    },
    {
      name: "Avi",
      age: 19,
      hobby: "sing"
    }
  ]);

  const copyStudents = () =>{
    setStudents([...students]);
  }

  const addStudent = newStudent => {
    const newStudentsArr = [...students, newStudent];
    setStudents(newStudentsArr);
  }

  const updateStudent = student => {
    const newStudentsArr = students.map(s => {
      if (s.name === student.name) {
        return{...student}
      }
      else return s;
    })
    setStudents(newStudentsArr);
  }

  const deleteStudent = name => {
    const newStudentsArr = students.filter(s => s.name !== name);
    setStudents(newStudentsArr);
  }

  return (
    <>
    <NewProfile addStudent = {addStudent} updateStudent = {updateStudent}/>
    {students.length>0 ?
      students.map((student, index) => {
        return <ProfileCard key={index} student={student} deleteStudent = {deleteStudent}/>
      }):
      <h4>no students</h4>
    }
    </>
  )
};

export default App
import { useState } from 'react'
import './App.css'
import NewProfile from './components/NewProfile'
import ProfileCard from './components/ProfileCard'

function App() {

  const [students, setStudents] = useState([
    {
      name: "chaim",
      age: 18,
      hobby: "learn"
    },
    {
      name: "Avi",
      age: 19,
      hobby: "sing"
    }
  ]);

  const addStudentFunc = newStudent => {
    const newStudentsArr = [...students, newStudent];
    setStudents(newStudentsArr);
  }

  const addStudent = newStudent => {
    const newStudentsArr = [...students, newStudent];
    setStudents(newStudentsArr);
  }

  const updateStudent = student => {
    const newStudentsArr = students.map(s => {
      if (s.name === student.name) {
        return{...student}
      }
      else return s;
    })
    setStudents(newStudentsArr);
  }

  const deleteStudent = name => {
    const newStudentsArr = students.filter(s => s.name !== name);
    setStudents(newStudentsArr);
  }

  return (
    <>
    <NewProfile addStudent = {addStudent} updateStudent = {updateStudent}/>
    {students.length>0 ?
      students.map((student, index) => {
        return <ProfileCard key={index} student={student} deleteStudent = {deleteStudent}/>
      }):
      <h4>no students</h4>
    }
    </>
  )
};

export default App
