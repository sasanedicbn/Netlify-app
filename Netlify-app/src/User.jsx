import React from 'react';
import './index.css';

const User = ({ data }) => {
  return (
    <div className="max-w-10rem mx-auto bg-white rounded-lg overflow-hidden shadow-md max-h-100 w-96">
      <img className="w-32 h-32 object-cover rounded-lg" src={data.image} alt={data.name} />
      <div className="p-6">
        <div className="font-bold text-lg mb-2 uppercase">{data.name}</div>
        <div className="text-sm text-gray-600 mb-1">{data.job}</div>
        <p className="text-sm text-gray-700">{data.text}</p>
      </div>
    </div>
  );
};

export default User;
