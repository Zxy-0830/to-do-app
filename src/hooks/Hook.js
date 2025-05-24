import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const json = window.localStorage.getItem(key);
      return json != null ? JSON.parse(json) : initialValue;
    } catch {
      return initialValue;
    }
  });


  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
