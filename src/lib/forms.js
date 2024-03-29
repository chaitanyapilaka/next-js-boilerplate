const dirtyValues = (dirtyFields, allValues) => {
  // If *any* item in an array was modified, the entire array must be submitted, because there's no way to indicate
  // "placeholders" for unchanged elements. `dirtyFields` is true for leaves.
  if (dirtyFields === true || Array.isArray(dirtyFields)) return allValues;
  // Here, we have an object
  return Object.fromEntries(
    Object.keys(dirtyFields).map(key => [
      key,
      dirtyValues(dirtyFields[key], allValues[key])
    ])
  );
};

export {
    dirtyValues
}
