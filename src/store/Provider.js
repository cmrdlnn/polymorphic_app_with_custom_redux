import React from 'react';

import Context from './Context';

const Provider = ({ children, store }) => {
  const [, update] = React.useReducer(s => s + 1, 0)

  const onStateChange = React.useCallback(() => {
    update();
    console.log(store)
  }, []);

  React.useEffect(() => {
    const unsubscribe = store.subscribe(onStateChange);

    return () => {
      unsubscribe();
    };
  }, [store]);

  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
