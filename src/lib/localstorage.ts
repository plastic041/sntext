export const saveToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string): string | null => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};
