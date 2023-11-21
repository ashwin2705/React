import React,{useState}from 'react'

export default function UseState() {
    const[student,setStuden]=useState("hi")
  return (
    <div>
      <h1>{student}</h1>
      <button onClick={()=>setStuden("Hello")}>click me</button>
    </div>
  )
}