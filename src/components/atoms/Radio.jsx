import React from 'react';

export const Radio = ({ name, options, onChange }) => {
  function handleInput(e) {
    const field = e.target.name,
      val = e.target.value;

    onChange();
  }

  return (
    <div className='input-radio'>
      {options.map((option, index) => {
        const optionName = name + '_' + option.name;
        return (
          <label key={index} htmlFor={optionName}>
            {option.label} <input type='radio' name={name} onChange={handleInput} id={optionName} />
          </label>
        );
      })}
    </div>
  );
};
