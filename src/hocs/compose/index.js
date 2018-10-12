const compose = (...hocs) => (
  hocs.reduce((acc, hocFn) => (...args) => acc(hocFn(...args)), arg => arg)
);

export default compose;
