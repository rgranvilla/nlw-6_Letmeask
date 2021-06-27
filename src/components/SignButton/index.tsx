import { ButtonHTMLAttributes } from "react";
import { FiLogOut } from "react-icons/fi";

import useAuth from "../../hooks/useAuth";

import { ButtonContainer } from "./styles";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  const { user, signOut, signIn } = useAuth();

  async function handleSignOut() {
    if (user) {
      await signOut();
    } else {
      return;
    }
  }

  async function handleSignIn() {
    if (!user) {
      await signIn();
    } else {
      return;
    }
  }

  return (
    <>
      <ButtonContainer onClick={user ? handleSignOut : handleSignIn} {...props}>
        <FiLogOut />
      </ButtonContainer>
    </>
  );
}

export default Button;
