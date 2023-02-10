import React, { useState, useRef, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import styles from "../assets/css/pages/meditation.module.css";
import { Icon } from "@iconify/react";
import play from "@iconify-icons/mdi/play-circle";
import back from "@iconify-icons/mdi/keyboard-backspace";
import cross from "../assets/img/cross.svg";

const API_URL = "/data.json";
const BELL_URL =
  "https://s3.amazonaws.com/tempora-pray-web-bucket/bells/Ship_Bell_mono.mp3";

function Meditation(props) {
  const [verse, setVerse] = useState(null);
  const [meditating, setMeditating] = useState(false);
  // TODO - make length editable via UI
  const [length, setLength] = useState(300000);
  const [remaining, setRemaining] = useState(length - 1);

  // We'll need history to go back to the previous page
  let history = useHistory();
  const exit = () => {
    history.goBack();
  };

  // Find the verse id from the params
  let { id } = useParams();
  let verseId = parseInt(id.replace(/\/app\/meditate\//, ""));

  // Setup the useRef object for the timers
  let audioTimer = useRef(null);
  let bell1, audio, bell2;

  // Play
  function playSequence() {
    // Setup audio elements
    audioTimer.current = {};
    audioTimer.current.verseAudio = new Audio(verse.url);
    audioTimer.current.bell1Audio = new Audio(BELL_URL);
    audioTimer.current.bell2Audio = new Audio(BELL_URL);

    // get the current time and finish time
    let t = new Date().getTime();
    audioTimer.current.finish = t + length;

    // create the audio sequence using callbacks
    audioTimer.current.bell1Audio.addEventListener("ended", (event) => {
      audioTimer.current.verseAudio.play();
    });
    audioTimer.current.verseAudio.addEventListener("ended", (event) => {
      audioTimer.current.bell2Audio.play();
    });
    audioTimer.current.bell2Audio.addEventListener("ended", (event) => {
      // audio sequence duration
      let sequenceDuration =
        (audioTimer.current.verseAudio.duration +
          audioTimer.current.bell1Audio.duration +
          audioTimer.current.bell1Audio.duration) *
        1000;
      // silence duration timer
      audioTimer.current.silenceTimer = window.setTimeout(() => {
        audioTimer.current.bell1Audio.play();
      }, length - sequenceDuration * 2);
    });

    // Begin the prayer
    setMeditating(true);
    audioTimer.current.bell1Audio.play();

    // Set interval to check the time every 30 seconds
    audioTimer.current.intervalCountdown = window.setInterval(() => {
      let now = new Date().getTime();
      let r = audioTimer.current.finish - now;
      setRemaining(r);
    }, 30000);

    // Once the prayer is completed, clear timers and toggle the state
    audioTimer.current.meditationCounter = window.setTimeout(() => {
      stopSequence();
      setMeditating(false);
    }, length);
  }

  // Define the function to clear all the timers
  function stopSequence() {
    if (audioTimer && audioTimer.current) {
      audioTimer.current.intervalCountdown &&
        window.clearInterval(audioTimer.current.intervalCountdown);
      audioTimer.current.silenceTimer &&
        window.clearInterval(audioTimer.current.silenceTimer);
      audioTimer.current.verseAudio && audioTimer.current.verseAudio.pause();
      audioTimer.current.bell1Audio && audioTimer.current.bell1Audio.pause();
      audioTimer.current.bell2Audio && audioTimer.current.bell2Audio.pause();
    }
  }

  // Run stop function on dismount
  useEffect(() => {
    return () => {
      stopSequence();
    };
  }, [audio, bell1, bell2]);

  // API call runs on mount
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        let verseContent = response.data.verses.filter(
          (verse) => verse.id === verseId
        )[0];
        setVerse(verseContent);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [verseId]);

  return (
    <div className={styles.wrapper}>
      <button onClick={exit} className={styles.back_btn}>
        <Icon icon={back} width='40px' color='white' />
      </button>
      <h1>{verse && verse.short_desc}</h1>
      <p className={`${styles.attribution} subtitle1`}>
        {verse && verse["attribution_hr"]}
      </p>
      <div className={styles.time}>
        {!meditating && <span>{length / 60000} minutes</span>}
        {meditating && (
          <span>
            {remaining < 60000 && <Fragment>Less than 1 minute</Fragment>}
            {remaining > 60000 && (
              /* break out logic */
              <Fragment>
                {" "}
                {Math.floor(remaining / 60000)} minute
                {Math.floor(remaining / 60000) !== 1 && <span>s</span>}
              </Fragment>
            )}{" "}
            remaining
          </span>
        )}
      </div>
      {!meditating && (
        /* onMouseEnter and onMouseLeave instead */
        <button
          className={`${styles.play_btn} ${styles.meditate}`}
          onMouseOut={() => props.setEngagement("")}
          onMouseOver={() => {
            props.setEngagement("press");
          }}
          onClick={() => playSequence()}
        >
          <Icon
            icon={play}
            width='80px'
            color='white'
            style={{ textAlign: "center" }}
          />
        </button>
      )}
      {meditating && (
        <div className={`${styles.icon} ${styles.meditate}`}>
          <img src={cross} alt='The Cross' width='100px' />
        </div>
      )}
    </div>
  );
}

export default Meditation;
