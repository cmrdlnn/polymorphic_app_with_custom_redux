import { combineReducers } from '../store';

import todos from './todos';

const reducers = combineReducers({
  todos,
});

export default reducers;
