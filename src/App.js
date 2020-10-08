import React from 'react';
import Meditations from './pages/Meditations';
import Page from './pages/Page';
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
          <h1>TEMPORA</h1>
        </header>
        <div className="main">
          <Switch>        
            <Route path="/page">
              <Page />
            </Route>
            <Route path="/meditations">
              <Meditations />
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
