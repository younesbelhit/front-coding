import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Link 
} from "react-router-dom";
import './App.css';
import Repository from './Repository';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/repositories">Repositories</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Route path="/repositories" exact component={Repository} />
        </main>
      </div>
    </Router>
    </div>
  );
}

export default App;
