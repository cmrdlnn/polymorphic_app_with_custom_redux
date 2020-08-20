import React from 'react';

import Context from '../Context';

const defaultIsEqual = (a, b) => a === b;

const useSelector = (selector, isEqual = defaultIsEqual) => {
  const store = React.useContext(Context);

  const [, update] = React.useReducer(s => s + 1, 0);

  const prevSelector = React.useRef();
  const prevStoreState = React.useRef();
  const prevSelectedState = React.useRef();

  const state = store.getState();

  let selected;

  if (selector !== prevSelector.current || state !== prevStoreState.current) {
    selected = selector(state);
  } else {
    selected = prevSelectedState.current;
  }

  React.useEffect(() => {
    prevSelector.current = selector;
    prevStoreState.current = state;
    prevSelectedState.current = selected;
  }, [selector, state]);

  React.useEffect(() => {
    const checkForUpdates = () => {
      const newSelected = prevSelector.current(store.getState())

      if (isEqual(newSelected, prevSelectedState.current)) {
        return
      }

      prevSelectedState.current = newSelected

      update()
    }

    const unsubscribe = store.subscribe(checkForUpdates);

    checkForUpdates()

    return () => {
      unsubscribe();
    };
  }, [store]);

  return selected;
};

export default useSelector;
