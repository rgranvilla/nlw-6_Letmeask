import { FormEvent, useState } from "react";
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
  const { signIn } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    signIn();
    history.push("/rooms/new");
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
          <div className="toggleThemeContainer">
            <ToggleThemeButton />
          </div>
          <Logo />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="" />
            Crie sua sala com o Google
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
        </div>
      </main>
    </Container>
  );
}
