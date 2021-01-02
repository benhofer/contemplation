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
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch, Redirect,
  Route, useLocation, NavLink
} from "react-router-dom";
import cross from './assets/img/cross.svg';

export default function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/app" />
          </Route>
          <Route path="*">
            <AnimationApp />
          </Route>
        </Switch>
      </Router>
  );
}

function AnimationApp() { 
  const [pageClass, setPageClass] = useState('navigate');
  const [linkClass, setLinkClass] = useState('press');
  const [colorClass, setColorClass] = useState('');

  let location = useLocation();

  return (
      <div>
          <TransitionGroup>
            {/*
              This is no different than other usage of
              <CSSTransition>, just make sure to pass
              `location` to `Switch` so it can match
              the old location as it animates out.
            */}
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}
              >
                <Gels color={colorClass} />
              </CSSTransition>
          </TransitionGroup>

          <div id="main" className={`main`}>
            <Router>
              <Switch>     
                <Route path="/app/:m" children={<Meditations />} />
                <Route exact path="/app">
                  <div>
                    <header className={`${styles.header} app-header home`}> 
                      <h1><NavLink to="/app">TEMPORA</NavLink></h1>                   
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

    </div>
  );
}
