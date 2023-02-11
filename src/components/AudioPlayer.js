import React, { useState, useRef, useEffect, Fragment } from "react";
import { Icon } from "@iconify/react";
import play from "@iconify-icons/mdi/play-circle";
import cross from "../assets/img/cross.svg";
import styles from "../assets/css/components/audioplayer.module.css";
const BELL_URL =
  "https://s3.amazonaws.com/tempora-pray-web-bucket/bells/Ship_Bell_mono.mp3";

function AudioPlayer(props) {
  const verse = props.verse;
  const length = props.length;
  const [meditating, setMeditating] = useState(false);

  const handleSetMeditating = (m) => {
    setMeditating(m);
    props.setMeditating(m);
  };

  const handleSetRemaining = (r) => {
    props.setRemaining(r);
  };

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
    handleSetMeditating(true);
    audioTimer.current.bell1Audio.play();

    // Set interval to check the time every 30 seconds
    audioTimer.current.intervalCountdown = window.setInterval(() => {
      let now = new Date().getTime();
      let r = audioTimer.current.finish - now;
      handleSetRemaining(r);
    }, 30000);

    // Once the prayer is completed, clear timers and toggle the state
    audioTimer.current.meditationCounter = window.setTimeout(() => {
      stopSequence();
      handleSetMeditating(false);
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

  return (
    <>
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
    </>
  );
}

export default AudioPlayer;
