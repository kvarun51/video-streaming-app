export const setLocalData = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
};

export const deleteLocalData = (key) => {
  localStorage.removeItem(key);
};

export const clearAllData = () => {
  localStorage.clear();
};

export const getLocalData = (key) => {
  let result;
  result = localStorage.getItem(key);

  if (
    result !== null &&
    result !== undefined &&
    result !== "null" &&
    result !== "undefined"
  ) {
    return JSON.parse(result);
  } else return false;
};
