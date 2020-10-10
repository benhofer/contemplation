import React from 'react';
import Card from '../components/Card';

function Prayer() {
  let items = [];

  for (let i = 1; i <= 16; i++ ) {
    items.push('item');
  }

    return (
      <div>
          <div className='grayboxtemplate container-grid-simple'>
            {
              items.map(d => 
                  <Card />
                )
            }
          </div>
      </div>
    )
}

export default Prayer; 