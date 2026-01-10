import { useState, useEffect } from "react";
import { ISignUp } from "@/types/Auth";

const getStorageValue = (key: string, defaultValue: ISignUp) => {
  // Check if we're on the client side (browser)
  if (typeof window === "undefined") {
    return defaultValue;
  }
  
  try {
    // getting stored value
    const saved = sessionStorage.getItem(key);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error("Error reading from sessionStorage:", error);
  }

  return defaultValue;
};

export const UseLocalStorage = (key: string, defaultValue: ISignUp) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // Only access sessionStorage in the browser (client-side)
    if (typeof window !== "undefined") {
      try {
        // storing input name
        sessionStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error("Error writing to sessionStorage:", error);
      }
    }
  }, [key, value]);

  return [value, setValue];
};
