import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { API_KEY, BASE_URL } from '../src/constants/index';

import Title from './components/Title';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {

  const [apod, setApod] = useState([]);

  useEffect(() => {
    const fetchApod = () => {
      axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
          setApod(res.data)
        })
        .catch(err => {
          debugger
        })
    }
    fetchApod();

  }, [])

  return (
    <div className="App">
      <Title header={apod.title} />
      <Body picture={apod.url} serviceVersion={apod.service_version} explanation={apod.explanation} />
      <Footer date={apod.date} />
    </div>
  );
}

export default App;
