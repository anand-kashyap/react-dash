import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/atoms/Input';
import { useFormValues } from '../hooks/useFormValues';
import { Context, initUser } from '../store';
import { getFullName } from '../utils/getFullName';

export default function Registration() {
  const [context, setContext] = useContext(Context);
  const [submitted, setSubmitted] = useState(false);
  const { formValues, handleInput, clearForm } = useFormValues({
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
    setContext((ctx) => {
      const user = { ...ctx.user, ...formValues };
      return { ...context, user };
    });
    setSubmitted(true);
    clearForm();
  }

  const { fname, lname, email, pass, confirmPass } = formValues;
  const { user } = context;
  return (
    <div className='register-user'>
      <h2>Register</h2>
      {submitted && (
        <p>
          Registered new user : <strong>{getFullName(user.fname, user.lname)}</strong>.<Link to='/login'>Login?</Link>
        </p>
      )}
      <form className='form' onSubmit={handleRegister} onChange={handleInput}>
        <Input name='fname' placeholder='John' label='First Name' value={fname} />
        <Input name='lname' placeholder='Doe' label='Last Name' value={lname} />
        <Input name='email' placeholder='abc@xyz.com' type='email' label='Email' value={email} />
        <Input name='pass' type='password' label='Password' value={pass} />
        <Input name='confirmPass' type='password' label='Confirm Password' value={confirmPass} />
        <button>Register</button>
      </form>

      <p>
        Existing user? <Link to='/login'>Login here</Link>
      </p>
    </div>
  );
}
