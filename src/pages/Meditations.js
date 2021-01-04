import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams, useHistory, useLocation } from "react-router-dom";
import SearchWidget from '../components/Search';
import Meditation from './Meditation';
import Browse from './Browse';
import styles from '../assets/css/pages/meditations.module.css';

function Meditations(props) {

  let { m } = useParams();

  if (m === 'meditate') {
    props.setColor('purple');
  } else {
    props.setColor('blue')
  }

  useEffect(() => props.setEngagement(m),[]);
  
  
  return (
    <div>
       { m === 'browse' && 
            <div>
              <header className={`${styles.header} app-header`}> 
                <h1><NavLink to="/app" onClick={() => props.goHome()}>TEMPORA</NavLink></h1>     
                {/*<SearchWidget /> */} 
              </header>  
              <Browse />
            </div>
        }{ m === 'meditate' && 
          <Router>
            <Switch>
              <Route path="/app/:m/:id" children={<Meditation setEngagement={props.setEngagement} />} /> 
            </Switch>
          </Router>
        }
      </div>
    )
}

export default Meditations; 