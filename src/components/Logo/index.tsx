import useTheme from "../../hooks/useTheme";

import logoImg from "../../assets/imagens/logo.svg";
import logoDarkImg from "../../assets/imagens/logo-dark.svg";

function Logo() {
  const { isLight } = useTheme();

  const insertedLogo = isLight ? logoImg : logoDarkImg;
  return <img src={insertedLogo} alt="Logo" />;
}

export default Logo;
