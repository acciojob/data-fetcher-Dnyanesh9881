
import React, {useEffect, useState} from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((jsonData) => {
        if (Object.keys(jsonData).length === 0) {
          throw new Error("No data found");
        }
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  
    return (
      <div>
      <h1>Data Fetched from API</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
      {!loading && !error && !data && <p>No data found</p>}
    </div>
  )
}

export default App
