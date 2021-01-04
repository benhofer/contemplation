import React, {useState, useRef, useEffect} from 'react';
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
    const [ length, setLength ] = useState(300000);

    let history = useHistory();
    let { id } = useParams();

    let verseId = parseInt(id.replace(/\/app\/meditate\//, ''));

    let audioTimer = useRef(null); 

    const exit = () => {
      history.goBack();
    }

    const setEngagement = (st) => {
      props.setEngagement(st)
    }

    let bell1, audio, bell2; 

    const playSequence = () => {
      audioTimer.current = {};
      audioTimer.current.verseAudio = new Audio(verse.url);
      audioTimer.current.bell1Audio = new Audio(BELL_URL);
      audioTimer.current.bell2Audio = new Audio(BELL_URL);

      setMeditating(true);
        audioTimer.current.bell1Timer = window.setTimeout(() => {audioTimer.current.bell1Audio.play()}, 800)
        audioTimer.current.verseTimer = window.setTimeout(() => {audioTimer.current.verseAudio.play()}, 2400)
        audioTimer.current.bell2Timer = window.setTimeout(() => {audioTimer.current.bell2Audio.play(); setMeditating(false); setEngagement(''); }, length)
    }

    useEffect(() => {
      return () => {
        if (audioTimer && audioTimer.current) {
          if (audioTimer.current.verseAudio) {
            audioTimer.current.verseAudio.pause();
            window.clearTimeout(audioTimer.current.verseTimer)
          } 
          if (audioTimer.current.bell1Audio) {
            audioTimer.current.bell1Audio.pause();
            window.clearTimeout(audioTimer.current.bell1Timer)
          }
          if (audioTimer.current.bell2Audio) {
            audioTimer.current.bell2Audio.pause();
            window.clearTimeout(audioTimer.current.bell2Timer)
          }
        } 
      }
    }, [audio, bell1, bell2])

    useEffect(() => {
      axios.get(API_URL)
        .then((response) => {
          let verseContent = response.data.verses.filter(verse => verse.id === verseId)[0]
          setVerse(verseContent)
        })
        .catch((e) => {
          console.log(e)
        })
    },[verseId]);
  
    return (
      <div className={styles.wrapper}>
          <button onClick={exit} className={styles.back_btn}>
            <Icon icon={back} width="40px" color="white" />
          </button>
          <h1>{verse && verse.short_desc}</h1>
          <h4 className={styles.attribution}>{verse && verse["attribution_hr"]}</h4>
          <div className={styles.time}>5 minutes</div>
          { !meditating && 
            <button className={`${styles.play_btn} ${styles.meditate}`} onMouseOut={() => setEngagement('')} onMouseOver={() => setEngagement('press')} onClick={() => playSequence()}>
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