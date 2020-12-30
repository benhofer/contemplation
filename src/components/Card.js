import React from 'react';
import styles from '../assets/css/components/card.module.css';

function Card(props) {
    let text
    if ((props.type === 'verse') && (props.text.length > 47)) {
        text = props.text.slice(0,47) + ' ...';
    } else {
        text = props.text;
    }

    return (
        <div className={styles.card}>
            <h1>{props.title}</h1>
            <small>{props.subtitle}</small> 
            <p>{text}</p>
        </div>
    )
}

export default Card;