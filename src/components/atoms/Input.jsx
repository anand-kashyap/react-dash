import React from 'react';

const Input = ({
  name,
  value,
  label = name,
  onChange = () => {},
  type = 'text',
  required = true,
  ...restInputAttrs
}) => {
  return (
    <label htmlFor={name}>
      {label}
      <input type={type} value={value} onChange={onChange} required name={name} id={name} {...restInputAttrs} />
    </label>
  );
};

export default Input;
