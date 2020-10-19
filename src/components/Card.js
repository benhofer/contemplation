import React from 'react';
import styles from '../assets/css/components/app.module.card.css';

function Card(props) {

    return (
        <div className="card">
            <h1>{props.title}</h1>
            {props.text}
        </div>
    )
}

export default Card;