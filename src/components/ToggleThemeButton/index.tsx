import { FiMoon, FiSun } from "react-icons/fi";
import { ToggleContainer } from "./styles";

import useTheme from "../../hooks/useTheme";

function ToggleThemeButton() {
  const { toggleTheme, isLight } = useTheme();

  return (
    <ToggleContainer onClick={toggleTheme} isLight={isLight}>
      <FiSun />
      {isLight ? "" : "Dark"}
      {isLight ? "Light" : ""}
      <FiMoon />
    </ToggleContainer>
  );
}

export default ToggleThemeButton;
