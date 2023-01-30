import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/atoms/Input';
import { useFormValues } from '../hooks/useFormValues';
import { Context } from '../store';

export default function Login() {
  const [context] = useContext(Context);
  const navigate = useNavigate();
  const { formValues, handleInput } = useFormValues({
    email: '',
    pass: '',
  });

  function handleLogin(e) {
    e.preventDefault();
    console.log({ formValues });
    for (const key in formValues) {
      if (Object.hasOwnProperty.call(formValues, key)) {
        const val = formValues[key];
        if (!val || val !== context.user[key]) {
          return console.error('Invalid login credentials', key);
        }
      }
    }
    navigate('/dashboard');
  }

  return (
    <div className='register-user'>
      <h2>Login</h2>
      <form className='form' onSubmit={handleLogin} onChange={handleInput}>
        <Input name='email' type='email' label='Email' value={formValues.email} />
        <Input name='pass' type='password' label='Password' value={formValues.pass} />
        <button>Login</button>
      </form>
      <p>
        New User? <Link to='/'>Register here</Link>
      </p>
    </div>
  );
}
