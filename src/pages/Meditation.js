import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams } from "react-router-dom";
import styles from '../assets/css/pages/meditation.module.css';
import { Link, useHistory } from "react-router-dom";

const API_URL = "/data.json";
const BELL_URL = "https://s3.amazonaws.com/tempora-pray-web-bucket/bells/Ship_Bell_mono.mp3"

function Meditation(props) { 
    const [ verse, setVerse ] = useState(null);
    const [ meditating, setMeditating ] = useState(false);

    var bellAudio = new Audio(BELL_URL)
    var verseAudio; 

    const playSequence = () => {
      verseAudio = new Audio(verse.url);
      setMeditating(true);
      window.setTimeout(() => {bellAudio.play()}, 800)
      window.setTimeout(() => {verseAudio.play()}, 2400)
      window.setTimeout(() => {bellAudio.play(); setMeditating(false)}, 28000)
    }

    useEffect(() => {
      axios.get(API_URL)
        .then((response) => {
          let verseContent = response.data.verses.filter(verse => verse.id === parseInt(props.verse))[0]
          setVerse(verseContent)
        })
        .catch((e) => {
          console.log(e)
        })
    });
  
    return (
      <div className={styles.wrapper}>
        <h1>{verse && verse.short_desc}</h1>
        <button onClick={props.exit}>Exit</button>
        <button className={styles.play_btn} onClick={() => playSequence()}>Play</button>
      </div>
    )
  }

  export default Meditation;