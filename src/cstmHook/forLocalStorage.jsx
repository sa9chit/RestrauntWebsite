import { useEffect, useState } from "react";

export const UseLocalStorage = (key, initialValue) => {
  const getDataFromLocalStorage = () => {
    try {
      const GetITem = localStorage.getItem(key);
      return GetITem ? JSON.parse(GetITem) : initialValue;
    } catch (error) {
      console.error(
        "Local Storage Not Found Please enter some data fuck u madarfaker",
        error
      );
      return initialValue;
    }
  };

  let [storedValue, setStoredValue] = useState(getDataFromLocalStorage);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      console.error("error in setting up localStorage", initialValue);
    }
  }, [key, storedValue]);
  
  return [key, setStoredValue];
};
