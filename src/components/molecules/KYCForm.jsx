import React, { useContext, useState } from 'react';
import { useFormValues } from '../../hooks/useFormValues';
import { Context, initKYC } from '../../store';
import Input from '../atoms/Input';
import { Radio } from '../atoms/Radio';

export function KYCForm() {
  const [context, setContext] = useContext(Context);
  const [submitted, setSubmitted] = useState(false);
  const { formValues, handleInput } = useFormValues({
    ...initKYC,
  });

  function handleKYCSubmit(e) {
    e.preventDefault();
    console.log({ formValues });
    setSubmitted(true);
  }

  const {
    user: { fname, lname, gender, isMarried, dob, fatherFName, fatherLName },
  } = context;
  const fullName = fname + ' ' + lname;
  return (
    <div className='register-user'>
      <h2>Hi, {fullName}</h2>
      {submitted && <p>KYC submitted</p>}
      <form className='form' onSubmit={handleKYCSubmit} onChange={handleInput}>
        <Input name='fatherFName' label="Father's First Name" value={formValues.fname} />
        <Input name='fatherLName' label="Father's Last Name" value={formValues.lname} />

        <Radio
          name='gender'
          label='Gender'
          options={[
            { name: 'male', label: 'Male' },
            { name: 'female', label: 'Female' },
          ]}
        />
        <Radio
          name='isMarried'
          label='Marital Status'
          options={[
            { name: 'single', label: 'Single' },
            { name: 'married', label: 'Married' },
          ]}
        />
        <button>Submit KYC</button>
      </form>
    </div>
  );
}
