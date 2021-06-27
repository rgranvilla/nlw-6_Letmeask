import { ButtonHTMLAttributes } from "react";
import { FiLogOut } from "react-icons/fi";

import useAuth from "../../hooks/useAuth";

import { ButtonContainer } from "./styles";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  const { user, signOut } = useAuth();

  async function handleSignOut() {
    if (user) {
      await signOut();
    } else {
      return;
    }
  }

  return (
    <>
      <ButtonContainer onClick={handleSignOut} {...props}>
        <FiLogOut />
      </ButtonContainer>
    </>
  );
}

export default Button;
