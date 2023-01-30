import React, { useContext, useState } from 'react';
import { useFormValues } from '../../hooks/useFormValues';
import { Context, initKYC } from '../../store';
import { getFullName } from '../../utils/getFullName';
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
    const vals = { ...formValues };

    // console.log({ vals });

    setContext((ctx) => {
      const user = { ...ctx.user, ...vals };
      return { ...ctx, user, kycDone: true };
    });
    setSubmitted(true);
  }

  const {
      user: { fname, lname },
      kycDone,
    } = context,
    fullName = getFullName(fname, lname);

  const { gender, isMarried, dob, fatherFName, fatherLName } = formValues;

  return (
    <div className='register-user'>
      <h2>Hi, {fullName}</h2>
      {!kycDone && <h3>Please Submit your KYC</h3>}
      {submitted && <p>KYC submitted</p>}
      <fieldset disabled={kycDone}>
        <form className='form kyc-form' onSubmit={handleKYCSubmit} onChange={handleInput}>
          <Input name='fatherFName' label="Father's First Name" value={fatherFName} />
          <Input name='fatherLName' label="Father's Last Name" value={fatherLName} />

          <Radio
            name='gender'
            label='Gender'
            value={gender}
            options={[
              { name: 'male', label: 'Male', value: 'M' },
              { name: 'female', label: 'Female', value: 'F' },
            ]}
          />
          <Radio
            name='isMarried'
            label='Marital Status'
            value={isMarried}
            options={[
              { name: 'single', label: 'Single', value: 'false' },
              { name: 'married', label: 'Married', value: 'true' },
            ]}
          />
          <label htmlFor='dob'>
            Date of Birth
            <input type='date' required defaultValue={dob} name='dob' id='dob' />
          </label>
          <button>Submit KYC</button>
        </form>
      </fieldset>
    </div>
  );
}
