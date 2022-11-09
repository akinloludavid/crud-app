export const setAccessToken = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getAccessToken = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};

export const removeAccessToken = (key: string) => {
  localStorage.removeItem(key);
};

export const isUrlImage = (url: string) => {
  const imageExtensions = ["png", "jpeg", "jpg", "svg"];
  const arr = url.split(".");
  const extension = arr[arr.length - 1];
  return imageExtensions.includes(extension);
};
