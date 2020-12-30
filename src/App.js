import React, {Fragment, useState, useEffect} from 'react';
import Search from './pages/Search';
import Meditations from './pages/Meditations';
import styles from './assets/css/pages/app.module.css';
import './assets/css/global/colors.css';
import './assets/css/global/grid.css';
import './assets/css/utilities/util.css';
import './assets/css/objects/objects.css';
import SearchWidget from './components/Search';

import {
  BrowserRouter as Router,
  Switch,
  Route, NavLink
} from "react-router-dom";
import cross from './assets/img/cross.svg';

function App() {
  const [pageClass, setPageClass] = useState('welcome');
  const [linkClass, setLinkClass] = useState('');
  const [colorClass, setColorClass] = useState('');

  const initPage = () => {window.setTimeout(() => {setLinkClass('press'); setPageClass('search')}, 1997)};

  return (
      <Fragment>
        <div id="gels" className={`${colorClass} ${pageClass} ${linkClass}`}>
          <div className="outermost">
            <div className="outer">
              <div className="inner">
                <div className="innermost">
                  <img src={cross} alt="the cross" width='100px' />
                  <small className="sr-only">O God, you will keep in perfect peace those whose minds are fixed on you. <i>Isaiah 26:3</i></small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="main" className={`${pageClass} ${linkClass} main`} onMouseEnter={() => initPage()}>
          <Router>
            <div>
              <div className="main-content">
                <Switch>        
                  <Route path="/meditations">
                    <div>
                      <header className={`${styles.header} app-header`} onClick={() => initPage()}> 
                        <h1><NavLink to="/">TEMPORA</NavLink></h1>     
                        <SearchWidget />       
                      </header>  
                      <Meditations />
                    </div>
                  </Route>
                  <Route exact path="/">
                    <div>
                      <header className={`${styles.header} app-header home`} onClick={() => initPage()}> 
                        <h1><NavLink to="/">TEMPORA</NavLink></h1>                   
                      </header>  
                      <Search />
                    </div> 
                  </Route>
                </Switch>
              </div>      
            </div>         
          </Router>
          <div className="push"></div>
        </div>
        <footer className={`${styles.footer} page-footer`}>
          <div className="lower-footer">
            <nav>
                <a href>About</a>
                <a href>Contribute</a>
                <a href>Connect</a>
                <a href>Resources</a>
            </nav>
          </div>
        </footer>
    </Fragment>
  );
}

export default App;
