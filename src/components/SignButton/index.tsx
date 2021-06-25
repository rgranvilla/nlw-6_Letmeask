import { ButtonHTMLAttributes } from "react";
import { FiLogIn, FiLogOut } from "react-icons/fi";

import useAuth from "../../hooks/useAuth";

import { ButtonContainer } from "./styles";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  const { user, signOut, signInWithGoogle } = useAuth();

  async function handleSignIn() {
    if (!user) {
      await signInWithGoogle();
    }
  }

  async function handleSignOut() {
    if (user) {
      await signOut();
    } else {
      return;
    }
  }

  return (
    <>
      {user ? (
        <ButtonContainer onClick={handleSignOut} {...props}>
          <FiLogOut />
        </ButtonContainer>
      ) : (
        <ButtonContainer onClick={handleSignIn} {...props}>
          <FiLogIn />
        </ButtonContainer>
      )}
    </>
  );
}

export default Button;
