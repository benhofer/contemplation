import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import AudioPlayer from "../components/AudioPlayer";
import { useParams, useHistory } from "react-router-dom";
import styles from "../assets/css/pages/meditation.module.css";
import { Icon } from "@iconify/react";
import back from "@iconify-icons/mdi/keyboard-backspace";
const API_URL = "/data.json";

function Meditation(props) {
  const [verse, setVerse] = useState(null);
  // we want to make length editable in the future.
  // 5 minutes.
  // eslint-disable-next-line no-unused-vars
  const [length, setLength] = useState(300000);
  const [meditating, setMeditating] = useState(false);
  const [remaining, setRemaining] = useState(length - 1);

  // We'll need history to go back to the previous page
  let history = useHistory();
  const exit = () => {
    history.goBack();
  };

  // Find the verse id from the params
  let { id } = useParams();
  let verseId = parseInt(id.replace(/\/app\/meditate\//, ""));

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
      <AudioPlayer
        verse={verse}
        length={length}
        setMeditating={(m) => setMeditating(m)}
        setRemaining={(r) => setRemaining(r)}
      />
    </div>
  );
}

export default Meditation;
