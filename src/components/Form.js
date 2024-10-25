import React, { useState } from 'react';

const Form = ({ model, onSubmit }) => {
    const [formData, setFormData] = useState(model);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.year || !formData.teacherID || !formData.studentFees) {
            alert('Please fill all the fields');
            return;
        }

        console.log('Submitting form data:', formData);
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 shadow-md rounded-lg">
            {Object.keys(model).map(key => (
                <div key={key} className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">{key}</label>
                    <input
                        name={key}
                        onChange={handleChange}
                        value={formData[key] || ''}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
            ))}
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">Submit</button>
        </form>
    );
};

export default Form;
