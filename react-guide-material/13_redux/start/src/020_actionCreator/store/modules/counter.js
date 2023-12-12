const initialState = 0;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "counter/+":
      return state + payload;
    case "counter/-":
      return state - payload;
    default:
      return state;
  }
};

// Action Creator
const add = (payload) => {
  return {
      type: "counter/+",
      payload: payload
  };
}

const minus = (payload) => {
  return {
      type: "counter/-",
      payload: payload
  };
}

export { reducer, add, minus }