const redux = require("redux");
const reducer = (store, action) => {};

const store = redux.createStore(reducer);
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);
