import React from 'react'
import '../style.css'

export default function Option({id,score,setScore,option,submitted,selections,setSelections,correct_answer}) {

    function select() {
        setSelections({...selections, [id]:option})
    }
    React.useEffect(() => {
        const isCorrect = submitted && selections[id] === option && correct_answer === selections[id];
        if (isCorrect) {
          setScore((score) => score + 1);
        }
        return () => {
          if (isCorrect) {
            setScore((score) => score - 1);
          }
        };
      }, [submitted, id, option, selections, correct_answer, setScore]);
  return (
    
    <button className = {submitted ? (selections[id]===option && correct_answer === selections[id] ? "option--win" : (selections[id]===option ? "option--loose" : "option")): (selections[id]===option ? "option--selected" : "option")} onClick={select}>
        {option}
    </button>
    )
}
