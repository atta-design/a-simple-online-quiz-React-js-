import React, { useState, useEffect } from "react";
import { questionList } from "./qustionlist";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIscorrect] = useState(false);
  console.log(current);

  const nextQuestion = () => {
    if (current < questionList.length - 1) {
      setCurrent(current + 1);
    }
  };

  useEffect(() => {
    if (isCorrect) {
      setScore(score + 1);
    }
  }, [current]);
  const ShowResult = () => {
    setCurrent(current + 1);
    setShowResult(true);
  };
  return (
    <div>
      {showResult ? (
        <div>
        <h1>Result:</h1>
        <h1>
          {score} of {questionList.length}
        </h1>
        </div>
      ) : (
        <div>
          <p className="questionText">{questionList[current].qustion}</p>
          <div>
            {questionList[current].answerList.map((answerOption) => (
              <div key={uuidv4()}>
                <button
                  className="chooseBTN"
                  onClick={() => setIscorrect(answerOption.isCorrect)}
                >
                  {answerOption.answer}
                </button>
              </div>
            ))}
          </div>

          {current === questionList.length - 1 ? (
            <button className="resultBTN" onClick={ShowResult}>
              RESULT
            </button>
          ) : (
            <button className="nextBTN" onClick={nextQuestion}>
              NEXT
            </button>
          )}
        </div>
      )}
    </div>
  );
}
