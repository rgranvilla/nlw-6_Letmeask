import { useParams } from "react-router-dom";

import SignButton from "../SignButton";
import RoomCode from "../../components/RoomCode";
import ToggleThemeButton from "../../components/ToggleThemeButton";
import LogoImg from "../../components/Logo";

import { Container } from "./styles";

type RoomParams = {
  id: string;
};

function Header() {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  return (
    <Container>
      <div className="content">
        <LogoImg />
        <div className="header-right-side">
          <div>{roomId && <RoomCode code={roomId} />}</div>
          <div>
            <ToggleThemeButton />
          </div>
          <SignButton />
        </div>
      </div>
    </Container>
  );
}

export default Header;
