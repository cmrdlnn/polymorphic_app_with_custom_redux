import React from 'react';

const Todos = ({ onAddTodo, todos = [] }) => {
  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const description = data.get('description');

    onAddTodo({ description });
  }, [onAddTodo]);

  return (
    <div>
      <h1>Todos:</h1>

      <ul>
        {todos.map(({ description }, i) => <li key={i}><p>{description}</p></li>)}
      </ul>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Write what you need to do</legend>
          <label>
            {'ToDo description: '}
            <input name="description" required type="text" />
          </label>
        </fieldset>
        <button type="submit">Add ToDo</button>
      </form>
    </div>
  )
};

export default Todos;
