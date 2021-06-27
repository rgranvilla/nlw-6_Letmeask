import toast from "react-hot-toast";
import copyImg from "../../assets/imagens/copy.svg";

import { Button } from "./styles";

type RoomCodeProps = {
  code: string;
};

function RoomCode(props: RoomCodeProps) {
  function copyRoomCodetoClipboard() {
    navigator.clipboard.writeText(props.code);
    toast.success("Código da sala copiado");
  }

  return (
    <Button className="room-code" onClick={copyRoomCodetoClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </Button>
  );
}

export default RoomCode;
