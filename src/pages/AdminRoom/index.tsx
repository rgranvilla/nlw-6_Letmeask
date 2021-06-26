import { useParams } from "react-router-dom";

import Header from "../../components/Header";

import deleteImg from "../../assets/imagens/delete.svg";

import { Container } from "./styles";
import Question from "../../components/Question";
import useRoom from "../../hooks/useRoom";
import { database } from "../../services/firebase";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  // const { user, signIn } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <>
      <Header isAdmin />
      <Container id="page-room">
        <main>
          <div className="room-title">
            <h1>Sala {title}</h1>
            {questions.length > 0 && (
              <span>
                {questions.length}{" "}
                {questions.length === 1 ? "pergunta" : "perguntas"}
              </span>
            )}
          </div>

          <div className="question-list">
            {questions.map((question) => {
              return (
                <Question
                  content={question.content}
                  author={question.author}
                  key={question.id}
                >
                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <img src={deleteImg} alt="Remover pergunta" />
                  </button>
                </Question>
              );
            })}
          </div>
        </main>
      </Container>
    </>
  );
}
