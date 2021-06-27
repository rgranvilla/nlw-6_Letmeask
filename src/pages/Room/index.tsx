import { FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FiThumbsUp } from "react-icons/fi";
import toast from "react-hot-toast";

import { database } from "../../services/firebase";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/Button";
import Header from "../../components/Header";

import { Container } from "./styles";
import Question from "../../components/Question";
import useRoom from "../../hooks/useRoom";

type RoomParams = {
  id: string;
};

export function Room() {
  const history = useHistory();
  const { user, signIn } = useAuth();
  const [newQuestion, setNewQuestion] = useState("");
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  useEffect(() => {
    async function isOpen() {
      const roomIsOpenRef = await database
        .ref(`rooms/${roomId}/closedAt`)
        .get();
      if (!(roomIsOpenRef.val() === null)) {
        toast.error("A sala foi encerrada.");
        history.push("/");
      }
    }
    isOpen();
  }, [roomId, history]);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      throw toast.error("You must be logged in.");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion("");
    throw toast.success("Sua pergunta foi enviada com sucesso!");
  }

  async function handleLikeQuestion(
    questionId: string,
    likeId: string | undefined
  ) {
    if (likeId) {
      await database
        .ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
        .remove();
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      });
    }
  }

  return (
    <>
      <Header />
      <Container id="page-room">
        <main>
          <div className="room-title">
            <h1>Sala {title}</h1>
            {questions.length > 0 && (
              <span className="amount-questions">
                {questions.length}{" "}
                {questions.length === 1 ? "pergunta" : "perguntas"}
              </span>
            )}
          </div>

          <form onSubmit={handleSendQuestion}>
            <textarea
              placeholder="O que você quer perguntar?"
              onChange={(event) => setNewQuestion(event.target.value)}
              value={newQuestion}
              disabled={!user}
            />
            <div className="form-footer">
              {user ? (
                <div className="user-info">
                  <img src={user.avatar} alt={user.name} />
                  <span>{user.name}</span>
                </div>
              ) : (
                <span>
                  Para enviar uma pergunta,{" "}
                  <button onClick={signIn}>faça seu login</button>.
                </span>
              )}
              <Button type="submit" disabled={!user}>
                Enviar pergunta
              </Button>
            </div>
          </form>

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
                  <button
                    className={`like-button ${
                      !question.isHighlighted ? "liked" : ""
                    }`}
                    type="button"
                    aria-label="Marcar como gostei"
                    onClick={() =>
                      handleLikeQuestion(question.id, question.likeId)
                    }
                    disabled={!user}
                  >
                    {question.likeCount > 0 ? (
                      <span>{question.likeCount}</span>
                    ) : (
                      <span>0</span>
                    )}
                    <FiThumbsUp />
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
