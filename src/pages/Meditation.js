import React from 'react';
import Card from '../components/Card';

function Meditation() {
  let items = [];

  for (let i = 1; i <= 16; i++ ) {
    items.push('item');
  }

    return (
      <div>
          <div className='grayboxtemplate container-grid-simple'>
            {
               items.map((d,i) => 
                  <Card key={'item-'+i} />
                )
            }
          </div>
      </div>
    )
}

export default Meditation; 