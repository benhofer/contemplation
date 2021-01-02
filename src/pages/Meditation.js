import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useHistory } from "react-router-dom";
import styles from '../assets/css/pages/meditation.module.css';
import { Icon } from '@iconify/react';
import play from '@iconify-icons/mdi/play-circle';
import back from '@iconify-icons/mdi/keyboard-backspace';
import cross from '../assets/img/cross.svg';

const API_URL = "/data.json";
const BELL_URL = "https://s3.amazonaws.com/tempora-pray-web-bucket/bells/Ship_Bell_mono.mp3"

function Meditation(props) { 
    const [ verse, setVerse ] = useState(null);
    const [ meditating, setMeditating ] = useState(false);
    const [ length, setLength ] = useState(24000);

    let history = useHistory();
    let { id } = useParams();

    let verseId = parseInt(id.replace(/\/app\/meditate\//, ''));

    console.log(id)

    var bellAudio = new Audio(BELL_URL)
    var verseAudio; 

    const exit = () => {
      history.goBack();
    }

    const playSequence = () => {
      verseAudio = new Audio(verse.url);
      setMeditating(true);
      window.setTimeout(() => {bellAudio.play()}, 800)
      window.setTimeout(() => {verseAudio.play()}, 2400)
      window.setTimeout(() => {bellAudio.play(); setMeditating(false)}, length)
    }

    useEffect(() => {
      axios.get(API_URL)
        .then((response) => {
          let verseContent = response.data.verses.filter(verse => verse.id === verseId)[0]
          setVerse(verseContent)
        })
        .catch((e) => {
          console.log(e)
        })
    });
  
    return (
      <div className={styles.wrapper}>
          <button onClick={exit} className={styles.back_btn}>
            <Icon icon={back} width="40px" color="white" />
          </button>
          <h1>{verse && verse.short_desc}</h1>
          <h4 className={styles.attribution}>{verse && verse.attribution}</h4>
          <div className={styles.time}>5 minutes</div>
          { !meditating && 
            <button className={`${styles.play_btn} ${styles.meditate}`} onClick={() => playSequence()}>
              <Icon icon={play} width="80px" color="white" style={{ textAlign: 'center'}}/>
            </button>
          }{ meditating && 
            <div className={`${styles.icon} ${styles.meditate}`} >
              <img src={cross} alt='The Cross' width='100px' />
            </div>
          }
      </div>
    )
  }

  export default Meditation;