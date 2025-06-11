import React from 'react'
import './App.css';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';


export const Home = () => {
  var students=["Minu","Anushruti","Esha","Aman","Aditya"];
  const student={
    "name":"Anushruti",
    "roll":23111445112,
    "branch":"CSE",
    "year":"2nd year",
    "college":"Chaibasa Engineering College"
  };


  const data=[
    {
    "name":"Anushruti",
    "roll":23111445112,
    "branch":"CSE",
    "year":"2nd year",
    "college":"Chaibasa Engineering College"
    },
    {
    "name":"Esha",
    "roll":23111445116,
    "branch":"CSE",
    "year":"2nd year",
    "college":"Chaibasa Engineering College"
    },
    {
    "name":"Aman",
    "roll":23111445119,
    "branch":"CSE",
    "year":"2nd year",
    "college":"Arka Jain College"
    },
    {
    "name":"Aditya",
    "roll":23111445111,
    "branch":"CSE",
    "year":"2nd year",
    "college":"Arka Jain College"
    },
]

  // students.push("Minu");
  // students.pop();
  // students.shift();
  students.unshift("abc");
  students.shift();
  // var sorted=students.sort();
  // var reversed=students.reverse();
  students.sort().reverse();
  return (
    <div>
      <h3> One Student details</h3>
      <p>{student.name}</p>
      <p>{student.roll}</p>
      <p>{student.branch}</p>
      <p>{student.year}</p>
      <p>{student.college}</p>

      <h3>Student data</h3>
      
      <p>Name:{data[1]["name"]}</p> {/* Another method  */}      
      <p>Roll:{data[1].roll}</p>
      <p>Branch:{data[1].branch}</p>
      <p>Year:{data[1].year}</p>
      <p>College:{data[1].college}</p>



        <h1>HOME</h1>
        <p>Name:{students[1]}</p>
        <p>Names of all students:{students}</p>
        <ul>
          {
          students.map(
            (student)=>{
            return( 
            <li>{student}</li>
            )
          })
          }
        </ul>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>sl.</th>
              <th>Name</th>
            </tr>
          </thead>
          { 
          <tbody>{ 
            students.map((student,index)=>{
              return(
                <tr>
                  <td>{index+1}</td>
                  <td>{student}</td>
                </tr>
              )
            })}
          </tbody>
          }
        </Table>

        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>sl.</th>
              <th>Name</th>
              <th>Roll No</th>
              <th>Year</th>
              <th>Branch</th>
              <th>College</th>
            </tr>
          </thead>
          { 
          <tbody>{ 
            data.map((datum,index)=>{
              return(
                <tr>
                  <td>{index+1}</td>
                  <td>{datum.name}</td>
                  <td>{datum.roll}</td>
                  <td>{datum.year}</td>
                  <td>{datum.branch}</td>
                  <td>{datum.college}</td>
                </tr>
              )
            })}
          </tbody>}
        </Table>


        <Alert  variant="success">
          This is {} alert—check it out!
        </Alert>
    </div>
  )
}
