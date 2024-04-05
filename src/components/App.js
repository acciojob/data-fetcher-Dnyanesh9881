
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
      setError(false);
      setData({...data})
    })
    .catch((error)=>{
      setError(true);
      console.log(error)
          })
  },[])

  return (
    <div>
        <div>{
           error ?<p>An error occurred: while fetching data</p> : !data.limit?<pre>No data found</pre>:<div>
           <h1>Data Fetched from API</h1>
           <pre>{JSON.stringify(data, null, 2)}</pre></div> 
          }
        </div>
    </div>
  )
}

export default App
