import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import illustrationImg from "../../assets/imagens/illustration.svg";

import { database } from "../../services/firebase";
import useAuth from "../../hooks/useAuth";
import Logo from "../../components/Logo";
import Header from "../../components/Header";
import Button from "../../components/Button";

import { Container } from "./styles";
import { TagRoom } from "../../components/TagRoom";
import { useEffect } from "react";

type FirebaseRooms = Record<
  string,
  {
    authorId: string;
    title: string;
    questions: Record<
      string,
      {
        isAnswered: boolean;
      }
    >;
  }
>;

type RoomsProps = {
  id: string;
  authorId: string;
  title: string;
  amountQuestions: number;
  amountAnswer: number;
};

export function NewRoom() {
  const history = useHistory();
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState("");
  const [allRooms, setAllRooms] = useState<RoomsProps[]>();

  useEffect(() => {
    async function LoadingRooms() {
      const loaderRoomsRef = await database.ref(`rooms`).get();
      if (loaderRoomsRef.val()) {
        const firebaseRooms: FirebaseRooms = loaderRoomsRef.val() ?? {};

        const parsedAllRooms = Object.entries(firebaseRooms)
          .filter(([key, value]) => value.authorId === user?.id)
          .map(([key, value]) => {
            return {
              id: key,
              authorId: value.authorId,
              title: value.title,
              amountQuestions: value.questions
                ? Object.entries(value.questions).length
                : 0,
              amountAnswer: value.questions
                ? Object.entries(value.questions).filter(
                    ([key, value]) => !!value.isAnswered
                  ).length
                : 0,
            };
          });
        setAllRooms(parsedAllRooms);
      }
    }

    LoadingRooms();
  }, [user?.id]);

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
              </section>
              <section className="existing-rooms">
                <>
                  <div className="separator">
                    ou selecione uma de suas salas
                  </div>
                  {allRooms?.map((rooms) => (
                    <TagRoom
                      id={rooms.id}
                      title={rooms.title}
                      amountQuestions={rooms.amountQuestions}
                      amountAnswer={rooms.amountAnswer}
                      key={rooms.id}
                    />
                  ))}
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
