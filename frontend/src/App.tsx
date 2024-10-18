import React, { useEffect, useState } from 'react';

import AddItem from './components/AddIitem';
import ItemList from './components/ItemList';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/some-endpoint/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div>
      {data ? <p>{data.someField}</p> : <p>No data available</p>}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Django and React Project</h1>
      <AddItem />
      <ItemList />
      <MyComponent />
    </div>
  );
}

export default App;
