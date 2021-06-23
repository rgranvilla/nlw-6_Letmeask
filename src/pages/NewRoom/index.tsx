import { Link } from "react-router-dom";

import Logo from "../../components/Logo";
import illustrationImg from "../../assets/imagens/illustration.svg";

import useAuth from "../../hooks/useAuth";

import Button from "../../components/Button";

import { Container } from "./styles";
import ToggleThemeButton from "../../components/ToggleThemeButton";

export function NewRoom() {
  const { user } = useAuth();

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
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
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
