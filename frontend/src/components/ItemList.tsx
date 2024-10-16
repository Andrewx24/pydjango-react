// src/ItemList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/items/')
            .then((response) => {
                setItems(response.data);  // Set state with fetched items
            })
            .catch((error) => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div>
            <h2>Items List</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <strong>{item.name}:</strong> {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
