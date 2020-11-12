import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import axios from 'axios';


const API_URL = "/data.json";
// const API_URL = "https://mp22l1ux2d.execute-api.us-east-1.amazonaws.com/default/tempora-pray-getcatalog"
// const BELL_URL = "https://s3.amazonaws.com/tempora-pray-web-bucket/bells/Ship_Bell_mono.mp3"

function Meditation(props) {

  const [meditations, setMeditations] = useState('');
  const [cardmm, setCardmm] = useState([0,4])
  const [currRow, setCurrRow] = useState(0);

  // useEffect(() => {
  //   let catalog;
  //     axios.get(API_URL)
  //       .then((response) => {
  //         catalog = response.data;
  //         let newStructure = [];
  //         catalog.original_works.map(work => {
  //           let newWork = [{...work},[]];
  //           work.verses.map(id => {
  //             newWork[1].push(catalog.verses.filter(verse => verse.id === id)[0])
  //           }) 
  //           console.log(newWork)
  //           newStructure.push(newWork);
  //         })
  //         console.log(newStructure)
  //         setMeditations(newStructure);
  //       })
  //       .catch((e) => {
  //         console.log(e)
  //       })
  // },[]);

  
  return (
    <div className='main-content'>
        <div className="rows">
          {/* { meditations && meditations.map((m,i) => (
              <div className="row" key={'row-'+i}>
                  { 
                    m.map((n,j) => (
                      <Card key={'meditation-'+j} title={m[0].author} text={n.text} />
                    ))
                  }
              </div>
            )
          )} */}
        
        </div>
      </div>
    )
}

export default Meditation; 