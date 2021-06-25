import { createContext, ReactNode } from "react";

import usePersistedState from "../utils/usePersistedState";

import { ThemeProvider, DefaultTheme } from "styled-components";
import { lightTheme, darkTheme } from "../themes/theme";
import { GlobalStyles } from "../themes/globals";
import { Theme } from "../themes/styled";

type ThemeContextData = {
  isLight: boolean;
  theme: Theme | undefined;
  toggleTheme: () => void;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    "theme",
    lightTheme
  );
  const isLight = theme.title === "Light";

  const toggleTheme = () => {
    setTheme(isLight ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        isLight,
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme.title === "Light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
