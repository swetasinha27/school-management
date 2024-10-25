import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import Table from '../components/Table';
import axios from 'axios';

const ClassManagement = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/classes')
            .then(response => setClasses(response.data))
            .catch(error => console.error('Error fetching classes:', error));
    }, []);

    const addClass = (classData) => {
        axios.post('http://localhost:3000/classes', classData)
            .then(response => setClasses([...classes, response.data]))
            .catch(error => console.error('Error adding class:', error));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Class Management</h1>
            <Form model={{ name: '', year: '', teacherID: '', studentFees: '' }} onSubmit={addClass} />
            <Table data={classes} />
        </div>
    );
};

export default ClassManagement;
