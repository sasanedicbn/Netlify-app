import React from 'react';
import './index.css';

const User = ({ data }) => {
  return (
    <div className="user-container">
      <img className="user-image" src={data.image} alt={data.name} />
      <div className="user-info">
        <div className="user-name">{data.name}</div>
        <div className="user-job">{data.job}</div>
        <div className="user-text">{data.text}</div>
      </div>
    </div>
  );
};

export default User;
