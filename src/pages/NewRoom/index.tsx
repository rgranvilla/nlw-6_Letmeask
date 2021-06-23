import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { database } from "../../services/firebase";

import Logo from "../../components/Logo";
import illustrationImg from "../../assets/imagens/illustration.svg";

import useAuth from "../../hooks/useAuth";

import Button from "../../components/Button";

import { Container } from "./styles";
import ToggleThemeButton from "../../components/ToggleThemeButton";

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/room/${firebaseRoom.key}`);
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </Container>
  );
}
