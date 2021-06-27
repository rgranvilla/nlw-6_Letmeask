import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { RiQuestionAnswerLine } from "react-icons/ri";

import { Container } from "./styles";

type TagRoomProps = {
  id: string;
  title: string;
  amountQuestions: number;
  amountAnswer: number;
};

export function TagRoom({
  id,
  title,
  amountQuestions,
  amountAnswer,
}: TagRoomProps) {
  const toAnswer = amountQuestions - amountAnswer;

  return (
    <Link to={`/admin/rooms/${id}`}>
      <Container>
        <div className="number-questions">
          <div>
            <span>{amountQuestions}</span>
          </div>
        </div>
        <div className="content">
          <strong>{title}</strong>
          <div className="to-answers">
            <span>{toAnswer}</span>
            <RiQuestionAnswerLine />
          </div>
        </div>
        <div className="access-room">
          <FiChevronRight />
        </div>
      </Container>
    </Link>
  );
}
