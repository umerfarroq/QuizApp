import { useQues } from "../context/QuestionContext";

export default function ProgressBar() {
  const { index, points, maxPossiblePoints, answer, numQuestion } = useQues();
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestion}
      </p>
      <p>
        <strong>{points}</strong> /{maxPossiblePoints}
      </p>
    </header>
  );
}
