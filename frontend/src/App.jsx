import React, { useState, useEffect } from 'react';
import EntrySearch from './components/EntrySearch';
import EntryCreate from './components/EntryCreate';
import { getAllEntries } from './services/entriesService';

import './App.css'

function App() {
    const [entries, setEntries] = useState([]);

    const fetchEntries = async () => {
        try {
            const data = await getAllEntries();
            setEntries(data);
        } catch (error) {
            console.error('Failed to fetch entries:', error);
        }
    };

    useEffect(() => {
        const getData = async () => await fetchEntries();
        getData()
    }, []); // Descarga datos la primera vez

    return (
        <div className="App">
            <h1>Entries Management</h1>
            <EntryCreate onEntryCreated={fetchEntries} />
            <EntrySearch entries={entries} onEntryDeleted={fetchEntries} />
        </div>
    );
}

export default App;
