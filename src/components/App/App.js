import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';

import Home from '../Home';
import Todos from '../Todos';
import About from '../About';
import NotFound from '../NotFound';

const App = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/todos" component={Todos} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
);

export default App;
