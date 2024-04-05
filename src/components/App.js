
import React, {useEffect, useState} from "react";
import './../styles/App.css';

const App = () => {
  const[data, setData]=useState({});
  const [error, setError]=useState(false);

  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setData({...data})})
    .catch((error)=>{
      setError(true);
            console.log(error)})
  },[])
  return (
    <div>
        {/* Do not remove the main div */}
        <div>{
           
           error ?<p>An error occurred: while fetching data</p> : Object.keys(data).length===0?<p>No data found</p>:<div>
           <h1>Data Fetched from API</h1>
           <pre>{JSON.stringify(data, null, 2)}</pre></div> 
          }
        </div>
    </div>
  )
}

export default App
