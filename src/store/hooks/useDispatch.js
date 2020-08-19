import React from 'react';

import Context from '../Context';

const useDispatch = () => {
  const store = React.useContext(Context);

  return store.dispatch;
};

export default useDispatch;
