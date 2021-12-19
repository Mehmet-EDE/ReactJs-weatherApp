import "./App.css";
import {useState,useEffect} from 'react'
import Weather from "./components/weather/Weather";



function App() {
const [hour,setHour] = useState('')


  const getDate = ()=>{
    let date = new Date();
   let hours = date.getHours()

   setHour(hours)

   
  }
  console.log(hour)

  useEffect(()=>{
    getDate()
  },[])

  
  
  return (
    <div className={`App ${hour<18 && hour>6 ? 'morning':'night'}`}>
      
      <Weather/>
      
    </div>
  );
}
export default App;
