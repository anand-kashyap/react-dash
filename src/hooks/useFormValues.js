import { useState } from 'react';

export function useFormValues(initValues) {
  const [values, setValues] = useState(initValues);

  function handleInput(e) {
    const field = e.target.name,
      val = e.target.value;

    setValues((vals) => {
      return { ...vals, [field]: val };
    });
  };

  function clearForm() {
    setValues(initValues);
  }
  return { formValues: values, handleInput, clearForm }
}