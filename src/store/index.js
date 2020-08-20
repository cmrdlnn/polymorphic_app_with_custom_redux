export const createStore = (reducer, initialStore = {}) => {
  let store = initialStore;

  const listeners = [];

  const subscribe = fn => {
    listeners.push(fn);

    return () => {
      const index = listeners.indexOf(fn);

      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  };

  const dispatch = action => {
    store = reducer(store, action);

    listeners.forEach(listener => listener());
  };

  const getState = () => store;

  dispatch({ type: '@@INIT' });

  return {
    dispatch,
    getState,
    subscribe,
  }
};

export const combineReducers = (reducers) => (store = {}, action) => {
  const newStore = {};
  let changed = false;

  for (const key in reducers) {
    const reducer = reducers[key];
    const prevState = store[key];

    const newState = reducer(prevState, action);
    const stateChanged = prevState !== newState;

    if (stateChanged) {
      changed = true;
    }

    newStore[key] = changed ? newState : prevState;
  }

  return changed ? newStore : store;
}

export { default as Provider } from './Provider';
export { default as useDispatch } from './hooks/useDispatch';
export { default as useSelector } from './hooks/useSelector';
