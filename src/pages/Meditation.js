import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import axios from 'axios';


const API_URL = "/data.json";
// const API_URL = "https://mp22l1ux2d.execute-api.us-east-1.amazonaws.com/default/tempora-pray-getcatalog"
// const BELL_URL = "https://s3.amazonaws.com/tempora-pray-web-bucket/bells/Ship_Bell_mono.mp3"

function Meditation(props) {

  const [meditations, setMeditations] = useState('');

  useEffect(() => {
    let catalog;
      axios.get(API_URL)
        .then((response) => {
          catalog = response.data;
          catalog.map(author => {
            return author["works"].map(work => {
              return work["sections"].map(section => {
                let newItem = {
                  "author":  author["name"],
                  "work": work["name"],
                  "section": section["number"],
                  "text": section["text"],
                  "url": section["url"]
                };
                return newStructure.push(newItem);
              })
            })
          })
        })
        .catch((e) => {
          console.log(e)
        })

    let newStructure = [];
    setMeditations(newStructure);

  },[]);

    return (
      <div>
          <div className='grayboxtemplate container-grid-simple'>
            { meditations && meditations.map(m => 
              <Card title={m.author} text={m.text} />  
            ) }
          </div>
      </div>
    )
}

export default Meditation; 