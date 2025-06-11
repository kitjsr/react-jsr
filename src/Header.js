import React, { useState } from 'react'

export const Header = () => {
    let rollNo=10,name="Anushruti Mahato",college="Chaibasa Engineering College",
    studentId=249001001147,branch="Computer Science and Engineering",year="2nd year";
    const[count,setCount]=useState(4);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
  return (
    <div>
        <p>Header</p>
        <button onClick={increment}>
            Increment Button
        </button>
        <br></br>
        <button onClick={decrement}>
            decrement Button
        </button>
        <p>Value of count:{count}</p>
        <p>Value of Set count:{setCount}</p>
        <p>
            Roll No:{rollNo} <br></br>
            Name:{name}<br></br>
            Year:{year}<br></br>
            Student ID:{studentId}<br></br>
            College:{college}<br></br>
            Branch:{branch}<br></br>
        </p>
    </div>
  )
}