import React from 'react';
import classes from '../assets/css/components/meditations.module.css';

function Meditation() {
  let items = [];

  for (let i = 1; i <= 16; i++ ) {
    items.push('item');
  }

    return (
      <div>
          <div className='grayboxtemplate container-grid-simple'>
            {
              items.map(d => 
                <div className={classes.item}></div>
              )
            }
          </div>
      </div>
    )
}

export default Meditation; 