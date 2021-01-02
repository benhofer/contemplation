import React, {Fragment, useState, useEffect} from 'react';
import Search from './pages/Search';
import Meditations from './pages/Meditations';
import styles from './assets/css/pages/app.module.css';
import './assets/css/global/main.css';
import './assets/css/global/colors.css';
import './assets/css/global/grid.css';
import './assets/css/utilities/util.css';
import './assets/css/objects/objects.css';
import SearchWidget from './components/Search';
import Gels from './components/Gels';
import Meditation from './pages/Meditation';
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

  const initPage = () => {window.setTimeout(() => {setLinkClass('press'); setPageClass('navigate')}, 1997)};

  useEffect(()=>initPage(),[]);

  return (
      <Fragment>
        <Gels img={{src: cross, alt: 'The Cross'}} colorClass={colorClass} pageClass={pageClass} linkClass={linkClass} />
        
        <div id="main" className={`${pageClass} ${linkClass} main`}>

          <Router>
         
            <Switch>     
              <Route path="/meditate/:id">
                <Meditation /> 
              </Route>
              <Route exact path="/browse">
                <div>
                  <header className={`${styles.header} app-header`} onClick={() => initPage()}> 
                    <h1><NavLink to="/">TEMPORA</NavLink></h1>     
                    <SearchWidget />       
                  </header>  
                  <Meditations setPageState={setPageClass} />
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
                    
          </Router>
          
          <div className="push"></div>
        </div>
        
        <footer className={`${styles.footer} ${pageClass} page-footer`}>
          <div className="lower-footer">
            <div className="u-text-center u-small">O God, you will keep in perfect peace those whose minds are fixed on you. <i>Isaiah 26:3</i></div>
          </div>
        </footer>
    </Fragment>
  );
}

export default App;
