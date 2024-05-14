import React from 'react';
import { Link } from 'react-router-dom';

const JobsType = ({counList}) => {
    const {id,name, image} = counList
  return (
    <Link to={`/category/${id}`}>
    <div className="bg-cover bg-center relative" style={{ backgroundImage: `url(${image})`, height: '300px' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-3xl font-bold">{name}</h3>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default JobsType;
