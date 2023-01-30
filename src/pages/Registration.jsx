import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/atoms/Input';
import { useFormValues } from '../hooks/useFormValues';
import { Context, initUser } from '../store';

export default function Registration() {
  const [context, setContext] = useContext(Context);
  const [submitted, setSubmitted] = useState(false);
  const { formValues, handleInput } = useFormValues({
    ...initUser,
    confirmPass: '',
  });

  function handleRegister(e) {
    e.preventDefault();
    if (!formValues.pass || formValues.pass !== formValues.confirmPass) {
      return console.error('password is empty or does not match with confirm password');
    }
    delete formValues.confirmPass;
    console.log({ formValues });
    setContext({ ...context, user: formValues });
    setSubmitted(true);
  }

  return (
    <div className='register-user'>
      <h2>Register</h2>
      {submitted && (
        <p>
          Registered new user : <strong>{formValues.fname + ' ' + formValues.lname}</strong>.{' '}
          <Link to='/login'>Login?</Link>
        </p>
      )}
      <form className='form' onSubmit={handleRegister} onChange={handleInput}>
        <Input name='fname' placeholder='John' label='First Name' value={formValues.fname} />
        <Input name='lname' placeholder='Doe' label='Last Name' value={formValues.lname} />
        <Input name='email' placeholder='abc@xyz.com' type='email' label='Email' value={formValues.email} />
        <Input name='pass' type='password' label='Password' value={formValues.pass} />
        <Input name='confirmPass' type='password' label='Confirm Password' value={formValues.confirmPass} />
        <button>Register</button>
      </form>

      <p>
        Existing user? <Link to='/login'>Login here</Link>
      </p>
    </div>
  );
}
