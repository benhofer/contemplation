import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import styles from '../assets/css/pages/search.module.css';
import axios from 'axios';
import { Icon } from "@iconify/react";
import roundSearch from '@iconify-icons/ic/round-search';
import { NavLink } from "react-router-dom";
import BrowseLinks from "../components/BrowseLinks";

const API_URL = "/data.json";
// const API_URL = "https://mp22l1ux2d.execute-api.us-east-1.amazonaws.com/default/tempora-pray-getcatalog"
// const BELL_URL = "https://s3.amazonaws.com/tempora-pray-web-bucket/bells/Ship_Bell_mono.mp3"


function Search (props) {
  const [meditations, setMeditations] = useState('');
  const [inputFocus, setInputFocus] = useState(false);

  // useEffect(() => {
  //   let catalog;
  //     axios.get(API_URL)
  //       .then((response) => {
  //         catalog = response.data;
  //         let newStructure = [];
  //         catalog.map(author => {
  //           return author["works"].map(work => {
  //             return work["sections"].map(section => {
  //               let newItem = {
  //                 "author":  author["name"],
  //                 "work": work["name"],
  //                 "section": section["number"],
  //                 "text": section["text"],
  //                 "url": section["url"]
  //               };
  //               return newStructure.push(newItem);
  //             })
  //           })
  //         })
  //         setMeditations(newStructure);
  //       })
  //       .catch((e) => {
  //         console.log(e)
  //       })
  //   });

    return (
      <div className={`${styles.search_page}`}>
        
        {/* <div className={`${styles.search_form}`}>
          <label htmlFor="search" className="sr-only">Search Meditations</label>
          <div className={`${styles.primary_search} ${inputFocus ? styles.search_active : ''}`}>
            <input type="text" placeholder='Search' onFocus={()=>{setInputFocus(true)}} onBlur={()=>{setInputFocus(false)}} />
            <NavLink to="/app/browse" className={`${styles.search_btn}`}>
              <Icon icon={roundSearch} style={{fontSize: '2rem'}} /> 
              <span className="sr-only">Search</span>
            </NavLink>
          </div>
        </div> */}

      </div>
    )
}

export default Search; 