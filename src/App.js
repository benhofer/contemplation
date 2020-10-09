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
      <div className={`solid container + ${wrapClass}`}>
        <div className="gradient wrapper">
          <div className="solid inner">
              <div className="content">
                <Router>
                  <header className={`${styles.header} app-header`}> 
                        <h1>TEMPORA</h1>
                        <nav className={`${styles.navlist} main-nav`}>
                          <ul onMouseEnter={() => { !wrapClass.includes('press') && setWrapClass('press')}} 
                              onMouseLeave={() => { !wrapClass.includes('page') && setWrapClass('')}}>
                            <li>
                              <NavLink to="/prayers" onClick={()=>{setWrapClass('engaged prayer page')}}>Contemplative Prayer</NavLink>
                            </li> 
                            <li>
                              <NavLink to="/meditations"
                                onClick={()=>{setWrapClass('engaged meditation page')}}>Meditation</NavLink>
                            </li>   
                            <li>
                              <NavLink to="/liturgy" onClick={()=>{setWrapClass('engaged liturgy page')}}>Liturgy</NavLink>
                            </li> 
                            <li>
                              <NavLink to="/contribute" onClick={()=>{setWrapClass('engaged contribute page')}}>Contribute</NavLink>
                            </li>
                            <li>
                              <NavLink  onClick={()=>{setWrapClass('engaged about page')}} to="/about">About</NavLink>
                            </li>
                          </ul>                    
                        </nav>
                  </header>
                </Router>
              </div>
              <div className="footer">
                
              </div>
          </div>
        </div>
      </div>
  );
}

export default App;
