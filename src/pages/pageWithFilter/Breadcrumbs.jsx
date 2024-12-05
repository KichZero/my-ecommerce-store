import React from 'react';
import '../../styles/pages/breadcrumbs.css'

const Breadcrumbs = ({ breadcrumbs, onBreadcrumbClick }) => {
  // Проверка на то, что breadcrumbs - это массив
  if (!Array.isArray(breadcrumbs)) {
    console.error('Expected breadcrumbs to be an array, but got:', breadcrumbs);
    return <p>Error: breadcrumbs should be an array</p>;
  }

  if (breadcrumbs.length === 0) {
    return <p>No breadcrumbs available</p>;
  }

  return (
    <div className='breadcrumbs'>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index} onClick={() => onBreadcrumbClick(index)}>
          {breadcrumb}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;