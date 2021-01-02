import React, {useState} from 'react';
import { Icon } from "@iconify/react";
import roundSearch from '@iconify-icons/ic/round-search';
import styles from '../assets/css/pages/search.module.css';
import { NavLink } from "react-router-dom";

function Search (props) {
    const [inputFocus, setInputFocus] = useState(false);

    return (
        <div className={`${styles.primary_search} ${inputFocus ? styles.search_active : ''}`}>
            <input type="text" placeholder='Search' onFocus={()=>{setInputFocus(true)}} onBlur={()=>{setInputFocus(false)}} />
            <NavLink to="/browse" className={`${styles.search_btn}`}>
                <Icon icon={roundSearch} style={{fontSize: '2rem'}} /> 
                <span className="sr-only">Search</span>
            </NavLink>
        </div> 
)}  

export default Search;