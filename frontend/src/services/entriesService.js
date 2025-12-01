import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL+'/entries'; // Usar variable de entorno para la URL base

export const getEntries = async (email) => {
    try {
        const url = email ? `${API_URL}?email=${email}` : API_URL;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching entries:', error);
        throw error;
    }
};

export const createEntry = async (entry) => {
    try {
        const response = await axios.post(API_URL, entry);
        return response.data;
    } catch (error) {
        console.error('Error creating entry:', error);
        throw error;
    }
};

export const deleteEntry = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting entry:', error);
        throw error;
    }
};

export const updateEntry = async (id, entry) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, entry);
        return response.data;
    } catch (error) {
        console.error('Error updating entry:', error);
        throw error;
    }
};

export const getAllEntries = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching all entries:', error);
        throw error;
    }
};