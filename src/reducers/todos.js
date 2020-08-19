const initialState = [];

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      return [...state, payload];

    case 'SET_TODOS':
      return payload;

    default:
      return state;
  }
};

export default todosReducer;
