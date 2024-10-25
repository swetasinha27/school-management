import React from 'react';

const Table = ({ data }) => (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
            <tr>
                {data.length > 0 && Object.keys(data[0]).filter(key => key !== '_id').map(key => (
                    <th key={key} className="py-2 px-4 border-b border-gray-200">{key}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                    {Object.keys(item).filter(key => key !== '_id').map((key, idx) => (
                        <td key={idx} className="py-2 px-4 border-b border-gray-200">
                            {key === 'teacher' ? item[key]?.name : (Array.isArray(item[key]) ? item[key].join(', ') : item[key])}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table;
