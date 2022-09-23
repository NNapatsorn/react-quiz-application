import { useState } from "react";
import QuestionData from "./data/QuestionsData";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div className='quiz'>
        <h1>{QuestionData[current].question}</h1>
        <div className='choices'>
          <button>{QuestionData[current].A}</button>
          <button>{QuestionData[current].B}</button>
          <button>{QuestionData[current].C}</button>
          <button>{QuestionData[current].D}</button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
