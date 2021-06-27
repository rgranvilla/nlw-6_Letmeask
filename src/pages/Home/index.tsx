import { FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

import googleIconImg from "../../assets/imagens/google-icon.svg";
import illustrationImg from "../../assets/imagens/illustration.svg";

import { database } from "../../services/firebase";
import useAuth from "../../hooks/useAuth";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import ToggleThemeButton from "../../components/ToggleThemeButton";

import { Container } from "./styles";

export function Home() {
  const history = useHistory();
  const { signIn, user } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  useEffect(() => {
    if (user) {
      history.push(`/rooms/new`);
    }
  }, [user, history]);

  async function handleCreateRoom() {
    await signIn();
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exist.");
      return;
    }

    if (roomRef.val().closedAt) {
      throw toast.error("Esta sala foi encerrada.");
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <Container>
      <aside>
        <img src={illustrationImg} alt="" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <Logo />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="" />
            <p>Entrar com o Google</p>
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
          <div className="toggleThemeContainer">
            <ToggleThemeButton />
          </div>
        </div>
      </main>
    </Container>
  );
}
