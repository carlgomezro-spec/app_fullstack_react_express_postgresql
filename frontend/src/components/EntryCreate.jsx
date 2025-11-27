import React, { useState, useEffect } from 'react';
import { createEntry } from '../services/entriesService';
import { getAllAuthors } from '../services/authorsService';

const EntryCreate = ({ onEntryCreated }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [email, setEmail] = useState(''); // Estado para el email del autor
    const [authors, setAuthors] = useState([]); // Estado para la lista de autores
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const data = await getAllAuthors();
                setAuthors(data);
            } catch (error) {
                setMessage('Failed to fetch authors. Please try again.');
                console.log(error);
                
            }
        };

        fetchAuthors();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newEntry = { title, content, category, email };
            await createEntry(newEntry);
            setMessage('Entry created successfully!');
            setTitle('');
            setContent('');
            setCategory('');
            setEmail('');
            onEntryCreated(); // Notificar al componente padre
        } catch (error) {
            setMessage('Failed to create entry. Please try again.');
            console.log(error);
            
        }
    };

    return (
        <div>
            <h1>Create New Entry</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <select
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    >
                        <option value="">Select an author</option>
                        {authors.map((author) => (
                            <option key={author.email} value={author.email}>
                                {author.name} ({author.email})
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Create Entry</button>
            </form>
        </div>
    );
};

export default EntryCreate;