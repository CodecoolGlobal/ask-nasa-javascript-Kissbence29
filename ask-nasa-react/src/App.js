import './App.css';
import {useState,useEffect} from 'react';
import Calendar from './Components/Calendar';
import Data from './Components/Data';

let now = new Date();
let baseDate=now.toISOString().slice(0, 10);
const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=1Y2xps6PFrqfili1DbLJ26MQOXxHk3qiOZJvhCe9&date=";

function App() {
  let input = document.querySelector("#date");
  const [url,setUrl]= useState(baseUrl+baseDate);
  const [data,setData] = useState({});

  useEffect(function getData(){
    fetch(url)
    .then((response) => {
      return response.json();
    })
   .then((data)=>{
    setData(data);
   })
    },[url])

  function onChange(){
    setUrl(baseUrl+input.value);
    baseDate=input.value;

  }
  return (
    <div className="App">
      <Calendar baseDate={baseDate} onChange={onChange}/>
      <Data data ={data}/>
    </div>
  );
}

export default App;
