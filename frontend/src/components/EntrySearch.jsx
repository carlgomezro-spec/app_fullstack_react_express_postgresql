import React, { useState } from 'react';
import { deleteEntry } from '../services/entriesService';

const EntrySearch = ({ entries, onEntryDeleted }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar las entries directamente en el render
    const filteredEntries = entries.filter(entry =>
        entry.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id) =>  {
        try {
            await deleteEntry(id); // Llamar al servicio para borrar la entry
            onEntryDeleted(); // Notificar al componente padre para actualizar la lista
        } catch (error) {
            console.error('Failed to delete entry:', error);
        }
    };

    return (
        <div>
            <h1>Search Entries</h1>
            <input
                type="text"
                placeholder="Search entries by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredEntries.map((entry) => (
                    <li key={entry.id_entry}>
                        <h3>{entry.title}</h3>
                        <p>{entry.content}</p>
                        <small>Category: {entry.category}</small>
                        <button onClick={() => handleDelete(entry.id_entry)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EntrySearch;