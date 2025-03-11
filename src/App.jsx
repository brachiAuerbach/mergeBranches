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

{/* <ProfilInputs></ProfilInputs>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}