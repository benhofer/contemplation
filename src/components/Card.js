import React from 'react';
import styles from '../assets/css/components/card.module.css';

function Card(props) {

    return (
        <div className={styles.card}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Card;