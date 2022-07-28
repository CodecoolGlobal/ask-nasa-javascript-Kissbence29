import './App.css';
import {useState,useEffect} from 'react';

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
       <input id="date" type="date" value={baseDate}  onChange={onChange}/>
       <h1>{data.title}</h1>
       <div>
       <h3>{data.date}</h3>
       </div>
      <p>{data.explanation}</p>
      {data.media_type==="image"?<img src={data.hdurl} alt=""/>:""}
      {data.media_type==="video"?<iframe src={data.url} title={data.title}/>:""}
    </div>
  );
}

export default App;
