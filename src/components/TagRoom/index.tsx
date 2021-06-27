import { FiChevronRight } from "react-icons/fi";
import { RiQuestionAnswerLine } from "react-icons/ri";

import { database } from "../../services/firebase";

import { Container } from "./styles";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

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
  const { user } = useAuth();
  const history = useHistory();

  function handleAccessRoom() {
    const roomRef = database.ref(`rooms/${id}`);

    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      const firebaseRoomAuthor: string = databaseRoom.authorId ?? {};

      if (firebaseRoomAuthor === user?.id) {
        history.push(`/admin/rooms/${id}`);
      }
    });
  }

  return (
    <Container>
      <button onClick={handleAccessRoom}>
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
      </button>
    </Container>
  );
}
