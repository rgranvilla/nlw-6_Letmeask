import { createContext, ReactNode, useState } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themes/theme";
import { GlobalStyles } from "../themes/globals";
import { Theme } from "../themes/styles";
import * as themes from "../themes/theme";

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
  const [theme, setTheme] = useState(themes.lightTheme);
  const isLight = theme === themes.lightTheme;

  const toggleTheme = () => {
    isLight ? setTheme(themes.darkTheme) : setTheme(themes.lightTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        isLight,
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider
        theme={theme === themes.lightTheme ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
