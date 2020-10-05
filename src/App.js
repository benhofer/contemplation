import React from 'react';
import Simple from './pages/Simple';
import Hero from './pages/Hero';
import Complex from './pages/Complex';
import styles from './assets/css/components/app.module.css';
import './assets/css/global/grid.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, NavLink
} from "react-router-dom";

function App() {
  return (
    <div className="app-grid">
      <Router>
        <header className={styles.header}>
          <h1>A few layouts using CSS Display Grid</h1>
          <nav>
            <ul className={styles.navlist}> 
              <li><NavLink activeClassName={styles.selected} exact='true' to="/">Simple</NavLink></li>
              <li><NavLink activeClassName={styles.selected} to="/hero">Hero</NavLink></li>
              <li><NavLink activeClassName={styles.selected} to="/complex">Complex</NavLink></li>
            </ul>
          </nav>
        </header>
        <div className="main">
          <Switch>        
            <Route path="/hero">
              <Hero />
            </Route>
            <Route path="/complex">
              <Complex />
            </Route>
            <Route path="/">
              <Simple />
            </Route>
          </Switch>
        </div>
      </Router>
      <div className="footer">
        
      </div>
    </div>
  );
}

export default App;
