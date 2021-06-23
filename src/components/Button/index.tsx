import { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  return <ButtonContainer className="button" {...props} />;
}

export default Button;
