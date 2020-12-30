import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import axios from 'axios';
import {
  useLocation
} from "react-router-dom";

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
    <div>
      <div className="wrapper">
        <section className="o-section">
          <div className="row">
            <div className="col-md-3">
              <Card title='Evagrius Ponticus' text='Evagrius Ponticus (Greek: Εὐάγριος ὁ Ποντικός, \"Evagrius of Pontus\"; Georgian: ევაგრე ქართველი), also called Evagrius the Solitary (345–399 AD), was a Christian monk and ascetic. One of the most influential theologians in the late fourth-century church, he was well known as a thinker, polished speaker, and gifted writer. He left a promising ecclesiastical career in Constantinople and traveled to Jerusalem, where in 383 he became a monk at the monastery of Rufinus and Melania the Elder. He then went to Egypt and spent the remaining years of his life in Nitria and Kellia, marked by years of asceticism and writing. He was a disciple of several influential contemporary church leaders, including Basil of Caesarea, Gregory of Nazianzus, and Macarius of Egypt. He was a teacher of others, including John Cassian and Palladius of Galatia.' />
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <Card title='On Prayer' text='short description' url='link to meditation page' color='red' />
                </div>
                <div className="col-md-4">
                  <Card title='On Prayer' text='short description' url='link to meditation page' color='red' />
                </div>
                <div className="col-md-4">
                  <Card title='On Prayer' text='short description' url='link to meditation page' color='red' />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Card title='On Prayer' text='short description' url='link to meditation page' color='red' />
                </div>
                <div className="col-md-4">
                  <Card title='On Prayer' text='short description' url='link to meditation page' color='red' />
                </div>
                <div className="col-md-4">
                  <Card title='On Prayer' text='short description' url='link to meditation page' color='red' />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Card title='On Prayer' text='short description' url='link to meditation page' color='red' />
                </div>
                <div className="col-md-4">
                  <Card title='On Prayer' text='short description' url='link to meditation page' color='red' />
                </div>
                <div className="col-md-4">
                  <Card title='On Prayer' text='short description' url='link to meditation page' color='red' />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="o-section">
          <div className="row">
            <div className="col-md-3">
              <Card title='St Paul' text='The biblical canon is the collection of scriptural books that God has given his corporate people. These books were grouped together by God’s people relatively early, with the OT being settled and stable by the birth of Jesus at latest, and the NT gaining large agreement even before the end of the second century. Although it wasn’t until the fourth century that the NT canon was officially decided, there is good reason to have historical confidence in the process. These books were largely decided on by virtue of three factors: their divine qualities, reception by the churches, and connection to an apostle. Most of the NT books were composed directly by one of the apostles (including Paul), and those that were not have close links to the testimony of the apostles themselves. &mdash; The Gospel Coalition' />
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <Card title='Philippians 4' text='short description' url='link to meditation page' color='red' />
                </div>
                <div className="col-md-4">
                  <Card title='Philippians 4' text='short description' url='link to meditation page' color='red' />
                </div>
                <div className="col-md-4">
                  <Card title='Philippians 4' text='short description' url='link to meditation page' color='red' />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Card title='Philippians 4' text='short description' url='link to meditation page' color='red' />
                </div>
                <div className="col-md-4">
                  <Card title='Philippians 4' text='short description' url='link to meditation page' color='red' />
                </div>
                <div className="col-md-4">
                  <Card title='Philippians 4' text='short description' url='link to meditation page' color='red' />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Card title='Philippians 4' text='short description' url='link to meditation page' color='red' />
                </div>
                <div className="col-md-4">
                  <Card title='Philippians 4' text='short description' url='link to meditation page' color='red' />
                </div>
                <div className="col-md-4">
                  <Card title='Philippians 4' text='short description' url='link to meditation page' color='red' />
                </div>
              </div>
            </div>
          </div>
        </section>
        


      </div>

        


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
    )
}

export default Meditation; 