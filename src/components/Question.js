import React from 'react';
import "../style.css";
import Option from './Option';

export default function Question({id, playing, score, setScore, selections, setSelections, submitted, correct_answer, incorrect_answers, question}) {
   

    let options = [...incorrect_answers , correct_answer].map(option => (
        <Option
            id={id}
            option={option}
            correct_answer={correct_answer}
            score={score}
            selections={selections}
            setSelections={setSelections}
            submitted={submitted}
            setScore={setScore}
        />
    ));

    return (
        <div className="question">
            <h2>{question}</h2>
            <div className="options">{options}</div>
            <hr />
        </div>
    );
}
