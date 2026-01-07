"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("dark");
  const switchDark = () => {
    setTheme("dark");
  };
  const switchLight = () => {
    setTheme("light");
  };
  return (
    <ThemeContext.Provider value={{ theme, switchDark, switchLight }}>
      <div className={`${theme} anim`}>{children}</div>
    </ThemeContext.Provider>
  );
};
