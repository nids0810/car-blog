import './App.css';
import CarPosts from './components/CarPosts';
import { React, useState, useEffect } from 'react';
import { client } from './client';
import ReactGA from 'react-ga4';

function App() {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
  const [carData, setCarData] = useState([]);

  useEffect(()=> {
    ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });
    client.getEntries()
    .then((response)=> {
      setCarData(response.items);
    })
    .catch(console.error);
  },[]);

  return (
    <div className="App">
      <CarPosts carData={carData}/>
    </div>
  );
}

export default App;
