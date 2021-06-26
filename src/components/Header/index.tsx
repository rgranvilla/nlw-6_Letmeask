import { HTMLProps, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { database } from "../../services/firebase";

import SignButton from "../SignButton";
import RoomCode from "../../components/RoomCode";
import ToggleThemeButton from "../../components/ToggleThemeButton";
import LogoImg from "../../components/Logo";

import { Container } from "./styles";
import Button from "../Button";
import toast from "react-hot-toast";

type RoomParams = {
  id: string;
};

type HeaderProps = HTMLProps<HTMLDivElement> & {
  isAdmin?: boolean;
};

function Header({ isAdmin, ...props }: HeaderProps) {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const [roomIsOpen, setRoomIsOpen] = useState(false);

  useEffect(() => {
    async function isOpen() {
      const ref = await database.ref(`rooms/${roomId}/closedAt`).get();
      setRoomIsOpen(ref.val() === null);
    }
    isOpen();
  }, [roomId]);

  async function handleEndRoom() {
    if (window.confirm("Tem certeza que você deseja encerrar a sala?")) {
      database.ref(`rooms/${roomId}`).update({
        closedAt: new Date(),
      });
      setRoomIsOpen(false);
      toast.success("Sala encerrada com sucesso.");
    }
  }

  async function handleReactiveRoom() {
    if (window.confirm("Você deseja reativar a sala?")) {
      await database.ref(`rooms/${roomId}/closedAt`).remove();
    }
    setRoomIsOpen(true);
    toast.success("Sala reaberta com sucesso.");
  }

  return (
    <Container>
      <div className="content">
        <LogoImg />
        <div className="header-right-side">
          <div>
            {roomId && (
              <div className="room-buttons">
                <RoomCode code={roomId} />
                {isAdmin &&
                  (roomIsOpen ? (
                    <Button isOutlined onClick={handleEndRoom}>
                      Fechar sala
                    </Button>
                  ) : (
                    <Button isOutlined onClick={handleReactiveRoom}>
                      Reabrir sala
                    </Button>
                  ))}
              </div>
            )}
          </div>
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
