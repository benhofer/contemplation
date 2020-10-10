import React from 'react';
import styles from '../assets/css/components/app.module.card.css';

function Card(props) {

    return (
        <div className="card">
            <h1>{props.heading}</h1>
            {props.description}
        </div>
    )
}

export default Card;