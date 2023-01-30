import React from 'react';

export const Radio = ({ name, label, options, value }) => {
  return (
    <div className='input-radio'>
      <p>{label}</p>
      {options.map((option, index) => {
        const optionName = name + '_' + option.name;
        const isChecked = value === option.value;

        return (
          <label key={index} htmlFor={optionName}>
            {option.label}{' '}
            <input
              type='radio'
              defaultValue={option.value}
              // onChange={onChange}
              defaultChecked={isChecked}
              name={name}
              id={optionName}
            />
          </label>
        );
      })}
    </div>
  );
};
