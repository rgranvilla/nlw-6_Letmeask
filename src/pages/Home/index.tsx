import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import Logo from "../../components/Logo";
import illustrationImg from "../../assets/imagens/illustration.svg";
import googleIconImg from "../../assets/imagens/google-icon.svg";

import Button from "../../components/Button";
import { Container } from "./styles";
import ToggleThemeButton from "../../components/ToggleThemeButton";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
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
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </Container>
  );
}
