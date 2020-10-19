import React, {useState, useEffect} from 'react';
import Meditations from './pages/Meditation';
import Page from './pages/Page';
import styles from './assets/css/pages/app.module.css';
import './assets/css/global/colors.css';
import './assets/css/global/grid.css';
import Prayer from './pages/Prayer';
import Meditation from './pages/Meditation';
import Liturgy from './pages/Liturgy';
import Contribute from './pages/Contribute';
import About from './pages/About';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route, NavLink
} from "react-router-dom";


const API_URL = "/data.json";
// const API_URL = "https://mp22l1ux2d.execute-api.us-east-1.amazonaws.com/default/tempora-pray-getcatalog"
// const BELL_URL = "https://s3.amazonaws.com/tempora-pray-web-bucket/bells/Ship_Bell_mono.mp3"


function App() {
  const [stateClass, setStateClass] = useState('');
  const [linkClass, setLinkClass] = useState('');
  const [pageClass, setPageClass] = useState('');

  useEffect(() => {
      axios.get(API_URL)
        .then((response) => {
          let catalog = response.data
          console.log(catalog)
        })
        .catch((e) => {
          console.log(e)
        })
    },[])

  return (
      <div className={`solid container ${stateClass} ${linkClass} ${pageClass}`}>
        <div className="gradient wrapper">
          <div className="solid inner">
              <div className="content">
                <Router>
                  <header className={`${styles.header} app-header`}> 
                        <h1><NavLink to="/">TEMPORA</NavLink></h1>
                        <nav className={`${styles.navlist} main-nav`}>
                          <ul onMouseEnter={() => { setStateClass('press')}} onMouseLeave={() => pageClass ? setStateClass('engaged') : setStateClass('')}>
                            <li>
                              <NavLink to="/meditations"
                                onMouseEnter={() => { setLinkClass('meditation')}} 
                                onMouseLeave={() => { setLinkClass('')}}
                                onClick={()=>{setStateClass('engaged'); setPageClass('meditation-page'); setLinkClass('')}}>Meditations</NavLink>
                            </li>   
                            <li>
                              <NavLink to="/contribute" 
                                 onMouseEnter={() => { setLinkClass('contribute')}} 
                                 onMouseLeave={() => { setLinkClass('')}}
                                 onClick={()=>{setStateClass('engaged'); setPageClass('contribute-page'); setLinkClass('')}}>Contribute</NavLink>
                            </li>
                          </ul>                    
                        </nav>
                  </header> 
                  <div className="main">
                  <Switch>        
                    <Route path="/prayers">
                      <Prayer />
                    </Route>
                    <Route path="/meditations">
                      <Meditations />
                    </Route>
                    <Route path="/liturgy">
                      <Liturgy />
                    </Route>
                    <Route path="/contribute">
                      <Contribute />
                    </Route>
                    <Route path="/about">
                      <About />
                    </Route>
                    <Route path="/">
                    </Route>
                  </Switch>
                  </div>
                </Router>
              </div>
              <footer className={`${styles.footer} page-footer`}>
                <small>O God, you will keep in perfect peace those whose minds are fixed on you. <i>Isaiah 26:33</i></small>
              </footer>
          </div>
        </div>
      </div>
  );
}

export default App;
