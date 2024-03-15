import React from 'react';
import './index.css';



const User = ({ data }) => {
  return (
    <div className="max-w-10rem mx-auto bg-white rounded-lg overflow-hidden shadow-md max-h-100 w-96 flex justify-center flex-col">
      <img className="w-32 h-32 object-cover rounded-lg mx-auto" src={data.image} alt={data.name} />
      <div className="p-6 text-center">
        <div className="font-bold text-lg mb-2 uppercase">{data.name}</div>
        <div className="text-sm text-gray-600 mb-1">{data.job}</div>
        <p className="text-sm text-gray-700">{data.text}</p>
      </div>
      <div className='flex justify-center '>
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-3 rounded-l mx-1">
      &larr;
    </button>
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-3 rounded-r">
      &rarr;
    </button>
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mx-auto m-4">
      SUPRISE ME
    </button>

    </div>
  );
};

export default User;
