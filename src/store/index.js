export const createStore = (reducer, initialStore = {}) => {
  let store = initialStore;

  const listeners = [];

  const subscribe = (fn) => {
    listeners.push(fn);

    return () => {
      const index = listeners.indexOf(fn);

      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
  };

  const dispatch = (action) => {
    store = reducer(store, action);

    listeners.forEach((listener) => listener());
  };

  const getState = () => store;

  dispatch({ type: '@@INIT' });

  return {
    dispatch,
    getState,
    subscribe,
  };
};

export const combineReducers = (reducers) => (store = {}, action) => {
  let changed = false;

  const newStore = Object.keys(reducers).reduce((memo, key) => {
    const reducer = reducers[key];
    const prevState = store[key];

    const newState = reducer(prevState, action);
    const stateChanged = prevState !== newState;

    if (stateChanged) {
      changed = true;
    }

    // eslint-disable-next-line no-param-reassign
    memo[key] = changed ? newState : prevState;

    return memo;
  }, {});

  return changed ? newStore : store;
};

export { default as Provider } from './Provider';
export { default as useDispatch } from './hooks/useDispatch';
export { default as useSelector } from './hooks/useSelector';
