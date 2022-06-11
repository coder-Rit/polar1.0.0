import './App.css';
import React, { useEffect,useState } from "react" 
  import Header from './components/Header';
import Stats from './components/Stats';
import NewsFeed from "./components/Newsfeed"
 


function App() {
    const [first, setfirst] = useState([])
   
   const getFlucuating = (baseVal, topVal, index) => {

  let counter1 = baseVal + index, counter2  
  setInterval(() => {
    let rand = Math.round(Math.random() * index)
          
    if (counter1 >= baseVal && counter1 <= topVal) {
      counter1 = counter1 + rand 
      setfirst(counter1)
      counter2 = counter1 
    }
    else if (counter1 >= topVal) {
      counter2 = counter2 -rand 
      setfirst(counter2)
      
      if (counter2 <= baseVal) {
          counter1 = counter2 +rand
          setfirst(counter1)
      }
    }  
   },1000);
  
} 

useEffect(() => {
  getFlucuating(10,50,5) 
}, [ ])
 
 
  
  return (
    <div className="app">
    <div className="app__header">
      <Header  />
    </div>
     
    <div className="app__body">
      <div className="app__container">
        <NewsFeed stockVal={first}/>
        <Stats />
      </div>
    </div>
  </div>

  );
}

export default App;
