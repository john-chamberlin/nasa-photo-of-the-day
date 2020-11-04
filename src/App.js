import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Image from './image';
import Header from './header';
import Details from './details';

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchPicture = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((res) => {
        console.log(res.data)
        setData(res.data);
      })
      .catch((err) => {
        console.log('no data! sucks!')
      })
    }
    fetchPicture();
  }, [])

  return (
    <div className="App">
      <Header title = {data.title} date = {data.date}/>
      <Image imageUrl = {data.url}/>
      <Details explanation = {data.explanation}/>
      
    </div>
  );
}

export default App;
