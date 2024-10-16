// src/AddItem.js
import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = { name, description };

        axios.post('http://127.0.0.1:8000/api/items/', newItem)
            .then((response) => {
                console.log('Item added successfully:', response.data);
                setName('');  // Clear input fields
                setDescription('');
            })
            .catch((error) => {
                console.error('There was an error adding the item!', error);
            });
    };

    return (
        <div>
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
