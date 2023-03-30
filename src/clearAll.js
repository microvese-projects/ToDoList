function clearAll(arr) {
  return arr.filter((each) => each.completed === false);
}

export default clearAll;