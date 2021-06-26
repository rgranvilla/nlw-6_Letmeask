import { FiChevronRight } from "react-icons/fi";

import { Container } from "./styles";

type TagRoomProps = {
  title: string;
  amountQuestions: number;
};

export function TagRoom({ title, amountQuestions }: TagRoomProps) {
  return (
    <Container>
      <div className="number-questions">
        <div>
          <span>{amountQuestions}</span>
        </div>
      </div>
      <strong>Sala: #{title}</strong>
      <div className="access-room">
        <FiChevronRight />
      </div>
    </Container>
  );
}
