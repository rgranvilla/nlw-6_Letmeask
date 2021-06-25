import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { database } from "../../services/firebase";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/Button";
import Header from "../../components/Header";

import { Container } from "./styles";

type RoomParams = {
  id: string;
};

export function Room() {
  const { user, signInWithGoogle } = useAuth();
  const [newQuestion, setNewQuestion] = useState("");

  const params = useParams<RoomParams>();
  const roomId = params.id;

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
    throw toast.success("Sua pergunta foi enviada!");
  }

  async function handleSignIn() {
    if (!user) {
      await signInWithGoogle();
    }
  }

  return (
    <>
      <Header />
      <Container id="page-room">
        <main>
          <div className="room-title">
            <h1>Sala React</h1>
            <span>4 perguntas</span>
          </div>

          <form onSubmit={handleSendQuestion}>
            <textarea
              placeholder="O que você quer perguntar?"
              onChange={(event) => setNewQuestion(event.target.value)}
              value={newQuestion}
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
                  <button onClick={handleSignIn}>faça seu login</button>.
                </span>
              )}
              <Button type="submit" disabled={!user}>
                Enviar pergunta
              </Button>
            </div>
          </form>
        </main>
      </Container>
    </>
  );
}
