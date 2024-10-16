import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/items/')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div className="App">
      <h1>Items List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - {item.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
