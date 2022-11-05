const loadingFunc = (loading, spinner, component) => {
  if (loading) {
    return spinner;
  } else {
    return component;
  }
};

export default loadingFunc;
