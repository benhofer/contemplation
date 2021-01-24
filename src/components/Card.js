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
        <div className={`${styles.card} ${props.type && styles[props.type]} ${props.introType && props.introType}`} id={props.id}>
            {
                props.type && 
                <p className="subtitle-above">{props.introType}</p>
            }
            {
                props.type === 'intro' && 
                <h1>{props.title}</h1>
            }{
                props.type !== 'intro' && 
                <h2>
                    {props.title} 
                </h2>
            }   
            {   
                props.subtitle && 
                <p className="subtitle2">{props.subtitle} 
                {/* • {props.work}  */}
                </p> 
            }
            <p>{text}</p>
        </div>
    )
}

export default Card;