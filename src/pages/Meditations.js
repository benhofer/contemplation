import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory, useLocation } from "react-router-dom";
import Meditation from './Meditation';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(window.location.search);
}

const API_URL = "/data.json";
// const API_URL = "https://mp22l1ux2d.execute-api.us-east-1.amazonaws.com/default/tempora-pray-getcatalog"
// const BELL_URL = "https://s3.amazonaws.com/tempora-pray-web-bucket/bells/Ship_Bell_mono.mp3"


function Meditations(props) {
  const [meditations, setMeditations] = useState('');
  const [cardmm, setCardmm] = useState([0,4])
  const [currRow, setCurrRow] = useState(0);
  const [verse, setVerse] = useState(null)

  let location = useLocation();
  let history = useHistory(); 
  let query = useQuery();
  let filter = query.get("filter");

  const filterByWork = (cat) => {
    let newStructure = [];
    cat.original_works.map(work => {
      let newWork = [{...work},[]];
      work.verses.map(id => {
        newWork[1].push(cat.verses.filter(verse => verse.id === id)[0])
      }) 
      // console.log(newWork)
      newStructure.push(newWork);
    })
    // console.info(newStructure)
    return newStructure; 
  }

  const filterByAuthor = (cat) => {
    let newStructure = [];
    cat.attribution.map(work => {
      let newWork = [{...work},[]];
      work.verses.map(id => {
        newWork[1].push(...cat.verses.filter(verse => verse.id === id))
      }) 
      // console.log(newWork)
      newStructure.push(newWork);
    })
    // console.info(newStructure)
    return newStructure; 
  }

  const filterByCollection = (cat) => {
    let newStructure = [];
    cat.collections.map(work => {
      // console.log('work', work)
      let newWork = [{...work},[]];
      work.verses.map(id => {
        newWork[1].push(cat.verses.filter(verse => verse.id === id)[0])
      }) 
      // console.log(newWork)
      newStructure.push(newWork);
    })
    // console.dir(newStructure)
    return newStructure; 
  }

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        let works;
        if (filter === 'author') {
          works = filterByAuthor(response.data)
        } else if (filter === 'work') {
          works = filterByWork(response.data)
        } else if (filter === 'collection') {
          works = filterByCollection(response.data)
        }
        setMeditations(works);
      })
      .catch((e) => {
        console.log(e)
      })
  });
  
  return (
    <div>
      <div className="wrapper">
          { meditations && meditations.map(cat => 
              <section className="o-section">
                <div className="row">
                  <div className="col-md-3">
                    <Card title={cat[0].name} text={cat[0].description} />
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      { cat[1].map(verse => 
                          <div className="col-md-4">
                            <Link to={'/meditate/'+verse.id}>
                              <Card type="verse" title={verse.short_desc} subtitle={verse.attribution} text={verse.text} url='link to meditation page' color='red' />
                            </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            )}
        </div>
      </div>
    )
}

export default Meditations; 