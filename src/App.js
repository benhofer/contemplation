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
  const [wrapClass, setStateClass] = useState('');
  const [linkClass, setLinkClass] = useState('');
  const [pageClass, setPageClass] = useState('');

  return (
      <div className={`solid container ${wrapClass} ${linkClass} ${pageClass}`}>
        <div className="gradient wrapper">
          <div className="solid inner">
              <div className="content">
                <Router>
                  <header className={`${styles.header} app-header`}> 
                        <h1>TEMPORA</h1>
                        <nav className={`${styles.navlist} main-nav`}>
                          <ul onMouseEnter={() => { setStateClass('press')}}>
                            <li>
                              <NavLink to="/prayers" 
                                 onMouseEnter={() => { setLinkClass('prayer')}} 
                                 onMouseLeave={() => { setLinkClass('')}}
                                 onClick={()=>{setStateClass('engaged'); setPageClass('prayer-page'); setLinkClass('') }}>Contemplative Prayer</NavLink>
                            </li> 
                            <li>
                              <NavLink to="/meditations"
                                onMouseEnter={() => { setLinkClass('meditation')}} 
                                onMouseLeave={() => { setLinkClass('')}}
                                onClick={()=>{setStateClass('engaged'); setPageClass('meditation-page'); setLinkClass('')}}>Meditation</NavLink>
                            </li>   
                            <li>
                              <NavLink to="/liturgy" 
                                 onMouseEnter={() => { setLinkClass('liturgy')}} 
                                 onMouseLeave={() => { setLinkClass('')}}
                                onClick={()=>{setStateClass('engaged'); setPageClass('liturgy-page'); setLinkClass('')}}>Liturgy</NavLink>
                            </li> 
                            <li>
                              <NavLink to="/contribute" 
                                 onMouseEnter={() => { setLinkClass('contribute')}} 
                                 onMouseLeave={() => { setLinkClass('')}}
                                 onClick={()=>{setStateClass('engaged'); setPageClass('contribute-page'); setLinkClass('')}}>Contribute</NavLink>
                            </li>
                            <li>
                              <NavLink 
                                 onMouseEnter={() => { setLinkClass('about')}} 
                                 onMouseLeave={() => { setLinkClass('')}}
                                onClick={()=>{setStateClass('engaged'); setPageClass('about-page'); setLinkClass('')}} to="/about">About</NavLink>
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
