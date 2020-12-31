import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams } from "react-router-dom";
import styles from '../assets/css/pages/meditation.module.css';

const API_URL = "/data.json";

function Meditation() { 
    let { id } = useParams();
    const [ verse, setVerse ] = useState(null);
    
    useEffect(() => {
      axios.get(API_URL)
        .then((response) => {
          setVerse(response.data.verses.filter(verse => verse.id === parseInt(id))[0])
        })
        .catch((e) => {
          console.log(e)
        })
    });
  
    return (
      <div className={styles.wrapper}>
        <h1>{verse && verse.short_desc}</h1>
      </div>
    )
  }

  export default Meditation;