import React from 'react';
import './style.css';
import Intro from './Intro';
import Question from './Question';
import { nanoid } from 'nanoid';
// import Confetti from 'confetti'; Will add Confetti If the score is greater than 3  
export default function App() {
  const [playing, setPlaying] = React.useState(false);
  const [apiquestions, setApiquestions] = React.useState([]);
  const [submitted, setSubmitted] = React.useState(false);
  const [selections, setSelections] = React.useState({});
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    if (!submitted) {
      fetch(
        'https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple'
      )
        .then((res) => res.json())
        .then((data) => setApiquestions(data.results));
    }
  }, [submitted]);

  const questions = apiquestions.map((apiquestion, index) => {
    const id = nanoid();
    return (
      <Question
        selections={selections}
        key={id}
        id={index}
        setSelections={setSelections}
        correct_answer={apiquestion.correct_answer}
        incorrect_answers={apiquestion.incorrect_answers}
        question={apiquestion.question}
        submitted={submitted}
        score={score}
        setScore={setScore}
        playing = {playing}
      />
    );
  });

  return (
    <div>
      {playing ? 
        (
          <div className='main'>
            {questions}
            <div className = "footer">
              <button
                className='Checkanswers'
                onClick={() => setSubmitted((prevsubmit) => !prevsubmit)}
              >
                {submitted ? 'New Session' : 'Check Answers'}
              </button>
              <h2>Score: {score}</h2>
            </div>
          </div>
        )
       : (
        <Intro playing={playing} setPlaying={setPlaying} />
      )}
    </div>
  );
}
