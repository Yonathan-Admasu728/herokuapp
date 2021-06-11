import './App.css';
import {useState, useEffect} from 'react';

//we gonna tell our react app where the api data lives.  my computer? or heroku?
function url(path){
  return process.env.NODE_ENV === "developement" ? `http://localhost:1234${path}` : path
}

function App() {
  const [data, setData]= useState("Hi")
  useEffect(()=>{
    fetch(url("/api/"))
    .then(res=>res.json())
    .then(apiData=>setData(apiData.data))
  },[])
  return (
    <div className="App">
      <header className="App-header">
       Api data returned: {data}
      </header>
    </div>
  );
}

export default App;
