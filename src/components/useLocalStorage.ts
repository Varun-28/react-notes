import { useState, useEffect } from "react";

const getSavedValue = (key: string, initialValue: any) => {
    const savedValue = localStorage.getItem(key); // localStorage.getItem can return null

    if (savedValue) {
      return JSON.parse(savedValue); // Only parse if savedValue is not null
    }

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

export default function useLocalStorage(key: string, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue]);

  return [storedValue, setStoredValue];
}
