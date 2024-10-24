import React from 'react';
import '../styles/input.css'; // Подключение стилей

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