import React from 'react'
import '../style.css'
export default function Intro({playing, setPlaying}) {
  return (
    <div className = "intro--body">
    <h1>Quizzical</h1>
    <p>Unlock your Video games knowledge with Quizzical - the ultimate trivia experience!</p>
    <button onClick = {()=>setPlaying(!playing)}>Start Quiz</button>
    </div>
  )
}
