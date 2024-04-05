
import React, {useEffect, useState} from "react";
import './../styles/App.css';

const App = () => {
  const[data, setData]=useState({});

  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setData({...data})})
    .catch((error)=>{console.log(error)})
  },[])
  return (
    <div>
        {/* Do not remove the main div */}
        <pre>
           <pre>{JSON.stringify(data, null, 2)}</pre>
        </pre>
    </div>
  )
}

export default App
