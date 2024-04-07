import { useQues } from "../context/QuestionContext";

export default function Options({ question }) {
  const { dispatch, answer, index } = useQues();
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct "
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={answer !== null}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

{
  /* <div className="options">
{question.options.map(
    (option,i) => 
    <button className=
    {`btn btn-option ${i === answer ? "answer" : ""}
    ${hasAnswered ? i === question.correctOption ? "correct" : "wrong" : ""}`} 
    key={option}
     disabled={answer !== null}
      onClick={() => dispatch({type:'newAnswer' ,payload:i})}
      >{option}</button>)}
</div> */
}
