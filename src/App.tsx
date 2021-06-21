import { Button1, Button2 } from "./components/Button";

function App() {
  return (
    <div>
      <Button1 text="sou um botão" />
      <Button2 />
      <Button1>Sou outro botão</Button1>
      <Button2 />
    </div>
  );
}

export default App;
