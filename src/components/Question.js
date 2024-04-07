import { useQues } from "../context/QuestionContext";
import Options from "./options";

export default function Question() {
  const { questions, dispatch, answer, index } = useQues();
  const question = questions.at(index);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}
