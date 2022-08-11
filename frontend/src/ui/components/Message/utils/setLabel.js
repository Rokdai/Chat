export const setLabel = (value) => {
  if (value) {
    return value.slice(0, 1);
  } else {
    return "U";
  }
};
