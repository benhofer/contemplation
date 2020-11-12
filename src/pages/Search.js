import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import styles from '../assets/css/pages/search.module.css';
import axios from 'axios';
import { Icon } from "@iconify/react";
import roundSearch from '@iconify-icons/ic/round-search';
import { NavLink } from "react-router-dom";
const API_URL = "/data.json";
// const API_URL = "https://mp22l1ux2d.execute-api.us-east-1.amazonaws.com/default/tempora-pray-getcatalog"
// const BELL_URL = "https://s3.amazonaws.com/tempora-pray-web-bucket/bells/Ship_Bell_mono.mp3"

function Search (props) {
  const [meditations, setMeditations] = useState('');
  const [inputFocus, setInputFocus] = useState(false);

  useEffect(() => {
    let catalog;
      axios.get(API_URL)
        .then((response) => {
          catalog = response.data;
          let newStructure = [];
          catalog.map(author => {
            return author["works"].map(work => {
              return work["sections"].map(section => {
                let newItem = {
                  "author":  author["name"],
                  "work": work["name"],
                  "section": section["number"],
                  "text": section["text"],
                  "url": section["url"]
                };
                return newStructure.push(newItem);
              })
            })
          })
          setMeditations(newStructure);
        })
        .catch((e) => {
          console.log(e)
        })
    });

    return (
      <div className={`${styles.search_page}`}>
        <div className={`${styles.search_form}`}>
          <label for="search" className="sr-only">Search Meditations</label>
          <div className={`${styles.primary_search} ${inputFocus ? styles.search_active : ''}`}>
            <input type="text" placeholder='Search' onFocus={()=>{setInputFocus(true)}} onBlur={()=>{setInputFocus(false)}} />
            <NavLink to="/meditations" className={`${styles.search_btn}`}>
              <Icon icon={roundSearch} style={{fontSize: '2rem'}} /> 
              <span class="sr-only">Search</span>
            </NavLink>
          </div>
        </div>
        <div className={`${styles.browse_links}`}>
          {/* <NavLink to="/attribution" className={`${styles.browse_link}`}>
            Curator
          </NavLink> */}
          <h1 className={`${styles.browse_heading}`}>
            <i>Browse By</i>
          </h1>
          <NavLink to="/meditations" className={`${styles.browse_link}`}>
            Author
          </NavLink>
          <NavLink to="/meditations" className={`${styles.browse_link}`}>
            Genre
          </NavLink>
          <NavLink to="/meditations" className={`${styles.browse_link}`}>
            Keyword
          </NavLink>
          <NavLink to="/meditations" className={`${styles.browse_link}`}>
            Mood
          </NavLink>
          {/* <NavLink to="/season" className={`${styles.browse_link}`}>
            Season
          </NavLink>
          <NavLink to="/month" className={`${styles.browse_link}`}>
            Month
          </NavLink>
          <NavLink to="/day" className={`${styles.browse_link}`}>
            Day
          </NavLink>
          <NavLink to="/era" className={`${styles.browse_link}`}>
            Era
          </NavLink> */}
        </div>
      </div>
    )
}

export default Search; 