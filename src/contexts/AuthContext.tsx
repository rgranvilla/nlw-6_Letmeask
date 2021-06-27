import { ReactNode, useState, useEffect, createContext } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

import { firebase, auth } from "../services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextData = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

// Definition autorization context with types
export const AuthContext = createContext({} as AuthContextData);

// Provider autorization context to aplication with all authorization rules
export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw toast.error("Missing information from Google Account");
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw toast.error("Missing information from Google Account");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
      throw toast.success(`Você está conectado.`);
    }
  }

  async function signIn() {
    if (!user) {
      await signInWithGoogle();
    }
  }

  async function signOut() {
    await auth.signOut();
    setUser(undefined);
    history.push(`/`);
    throw toast.success(`Você está desconectado.`);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
