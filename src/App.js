import React, {useState, useEffect} from 'react';
import Search from './pages/Search';
import styles from './assets/css/pages/app.module.css';
import './assets/css/global/colors.css';
import './assets/css/global/grid.css';
import Contribute from './pages/Contribute';
import About from './pages/About';
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

  const initPage = () => {window.setTimeout(() => {setLinkClass('press'); setPageClass('blue')}, 997)};
  
  return (
      <div className={`solid container ${pageClass} ${linkClass} ${colorClass}`}>
        <div className="gradient wrapper">
          <div className="solid inner">
              <div className="content">
                <Router>
                  <header className={`${styles.header} app-header`}> 
                    {/* <NavLink 
                      to="/meditations"
                      onMouseEnter={() => { setLinkClass('press meditation')}} 
                      onMouseLeave={() => { setLinkClass('')}}
                      onClick={()=>{setPageClass('engaged'); setPageClass('meditation-page'); setLinkClass('')}}>Meditations</NavLink> */}
                    <h1><NavLink to="/" onClick={() => {setPageClass('welcome'); setColorClass(''); setLinkClass('')}}>TEMPORA</NavLink></h1>                   
                    {/* <NavLink to="/contribute" 
                        onMouseEnter={() => { setLinkClass('press contribute')}} 
                        onMouseLeave={() => { setLinkClass('')}}
                        onClick={()=>{setPageClass('engaged'); setPageClass('contribute-page'); setLinkClass('')}}>Contribute</NavLink> */}
                  </header> 
                    <div className="images" 
                    onMouseEnter={() => initPage()}
                    >
                        <img src={cross} alt="the cross" width='100px' onClick={() => {setLinkClass('clicked')}} />
                    </div>
                  
                  <div className="main">
                    <Search />
                    <Switch>        
                      <Route path="/prayers">
                        <Search />
                      </Route>
                      {/* <Route path="/liturgy">
                        <Liturgy />
                      </Route>
                      <Route path="/contribute">
                        <Contribute />
                      </Route>
                      <Route path="/about">
                        <About />
                      </Route>
                      <Route path="/">
                      </Route> */}
                    </Switch>
                    </div>
                  </Router>
              </div>
              <footer className={`${styles.footer} page-footer`}>
                <small>O God, you will keep in perfect peace those whose minds are fixed on you. <i>Isaiah 26:3</i></small>
                  {/* { pageClass === "engaged" &&  */}
                    <div className={styles.sub_footer}> 
                      <nav>
                          <a href>About</a>
                          <a href>Contribute</a>
                          <a href>Connect</a>
                          <a href>Resources</a>
                      </nav>
                    </div>
                   {/* } */}
              </footer>
          </div>
        </div>
      </div>
  );
}

export default App;
