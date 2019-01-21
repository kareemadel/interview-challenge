export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const cloneDeep = obj => {
  return JSON.parse(JSON.stringify(obj));
};
