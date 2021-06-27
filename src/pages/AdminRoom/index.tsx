import { useHistory, useParams } from "react-router-dom";
import { FiThumbsUp } from "react-icons/fi";

import Header from "../../components/Header";

import deleteImg from "../../assets/imagens/delete.svg";
import checkImg from "../../assets/imagens/check.svg";
import answerImg from "../../assets/imagens/answer.svg";

import { Container } from "./styles";
import Question from "../../components/Question";
import useRoom from "../../hooks/useRoom";
import { database } from "../../services/firebase";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const history = useHistory();
  const roomId = params.id;
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  const { title, questions } = useRoom(roomId);

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      const firebaseRoomAuthor: string = databaseRoom.authorId ?? {};

      if (firebaseRoomAuthor !== user?.id) {
        history.push(`/`);
        toast.error("Acesso não permitido.");
      } else {
        setIsAdmin(true);
      }
    });
  }, [user?.id, history, roomId]);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlihtQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <>
      <Header isAdmin={isAdmin} />
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
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  <div className="likes">
                    {question.likeCount > 0 ? (
                      <span>{question.likeCount}</span>
                    ) : (
                      <span>0</span>
                    )}
                    <FiThumbsUp />
                  </div>
                  {!question.isAnswered && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          handleCheckQuestionAsAnswered(question.id)
                        }
                      >
                        <img
                          src={checkImg}
                          alt="Marcar pergunta como respondida"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleHighlihtQuestion(question.id)}
                      >
                        <img src={answerImg} alt="Dar destacar a pergunta" />
                      </button>
                    </>
                  )}
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
