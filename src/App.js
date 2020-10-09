import React, {useState} from 'react';
import Meditations from './pages/Meditations';
import Page from './pages/Page';
import styles from './assets/css/components/app.module.css';
import './assets/css/global/colors.css';
import './assets/css/global/grid.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, NavLink
} from "react-router-dom";

function App() {
  const [wrapClass, setWrapClass] = useState('');

  return (
    <div className={"wrapper " + wrapClass}>
      <Router>
         <div>
            <header className={`${styles.header} app-header`}
              onMouseEnter={() => {wrapClass !== 'engaged' && setWrapClass('press')}} 
              onMouseLeave={() => {wrapClass !== 'engaged' && setWrapClass('')}} 
              onClick={()=>{ wrapClass !== 'engaged' ? setWrapClass('engaged') : setWrapClass('')}}>
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
          </div>
       </Router>
      <div className="footer">
        
      </div>
    </div>
  );
}

export default App;
