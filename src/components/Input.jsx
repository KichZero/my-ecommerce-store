import React from 'react';
import './Input.css'; // Подключение стилей

const Input = ({ value, onChange, placeholder, type = 'text' }) => {
  return (
    <input 
      className="input"
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      type={type} 
    />
  );
};

export default Input;