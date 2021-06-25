import { FiMoon, FiSun } from "react-icons/fi";
import { ToggleContainer } from "./styles";

import useTheme from "../../hooks/useTheme";

function ToggleThemeButton() {
  const { isLight, toggleTheme } = useTheme();

  return (
    <ToggleContainer onClick={toggleTheme} isLight={isLight}>
      <div>
        <FiSun />
        <span>
          {isLight ? "" : "Dark"}
          {isLight ? "Light" : ""}
        </span>
        <FiMoon />
      </div>
    </ToggleContainer>
  );
}

export default ToggleThemeButton;
