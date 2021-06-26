import { FormEvent, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import illustrationImg from "../../assets/imagens/illustration.svg";

import { database } from "../../services/firebase";
import useAuth from "../../hooks/useAuth";
import Logo from "../../components/Logo";
import Header from "../../components/Header";
import Button from "../../components/Button";

import { Container } from "./styles";
import { TagRoom } from "../../components/TagRoom";

type FirebaseRooms = Record<
  string,
  {
    title: string;
    questions: Record<
      string,
      {
        author: {
          name: string;
          avatar: string;
        };
        content: string;
        isAnswered: boolean;
        isHighlighted: boolean;
      }
    >;
  }
>;

type RoomsType = {
  id: string;
  title: string;
  questions: {
    id: string;
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
  };
  amountQuestions: number;
};

export function NewRoom() {
  const history = useHistory();
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState("");
  // const [rooms, setRooms] = useState<RoomsType[]>([]);

  useEffect(() => {
    const roomRef = database.ref("rooms");

    roomRef.once("value", (room) => {
      const databaseRoom = room.val();
      const firebaseRoom: FirebaseRooms = databaseRoom ?? {};

      const parsedRoom = Object.entries(firebaseRoom).map(([key, value]) => {
        return {
          id: key,
          title: value.title,
          questions: value.questions,
        };
      });
      const newData = parsedRoom.map((value) => value?.questions);

      console.log(newData);
      console.log(Object.keys(newData[0]).length);
    });
  }, []);

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

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <>
      <Header />
      <Container>
        <div className="content">
          <aside>
            <div className="aside-content">
              <img src={illustrationImg} alt="" />
              <strong>Crie salas de Q&amp;A ao vivo</strong>
              <p>Tire as dúvidas da sua audiência em tempo real</p>
            </div>
          </aside>
          {user ? (
            <main>
              <section className="main-content">
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
                  Quer entrar em uma sala existente?{" "}
                  <Link to="/">clique aqui</Link>
                </p>
              </section>
              <section className="existing-rooms">
                <>
                  <div className="separator">
                    ou selecione uma de suas salas
                  </div>
                  {/* {rooms.map(({ id, title }) => {
                    return (
                      <TagRoom title={title} amountQuestions={1} key={id} />
                    );
                  })} */}
                </>
              </section>
            </main>
          ) : (
            <main>Realize o Login para continuar.</main>
          )}
        </div>
      </Container>
    </>
  );
}
