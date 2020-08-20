import React from 'react';

import { useDispatch, useSelector } from '../../store';

import { getTodos } from '../../reducers/todos';

import TodosComponent from '../../components/Todos';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  const handleAddTodo = React.useCallback(payload => {
    dispatch({ payload, type: 'ADD_TODO' });
  }, [dispatch]);

  return (
    <TodosComponent onAddTodo={handleAddTodo} todos={todos} />
  );
}

export default React.memo(Todos);
