import React from 'react';
import './Breadcrumbs.scss';

const Breadcrumbs = ({ path }) => {
  return (
    <nav className="breadcrumbs">
      {path.map((crumb, index) => (
        <span key={index}>
          {crumb}
          {index < path.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;