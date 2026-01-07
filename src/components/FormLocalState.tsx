import { useState, useEffect } from "react";
import { ISignUp } from "@/types/Auth";

const getStorageValue = (key: string, defaultValue: ISignUp) => {
  // getting stored value
  const saved = sessionStorage.getItem(key);
  const initial = saved !== null ? JSON.parse(saved) : defaultValue;
  return initial || defaultValue;
};

export const UseLocalStorage = (key: string, defaultValue: ISignUp) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
