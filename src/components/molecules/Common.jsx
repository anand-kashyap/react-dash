import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../store';

export const Common = ({ children }) => {
  const [{ user, kycDone }, setContext] = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    setContext({
      user: null,
      kycDone: false,
    });
    navigate('/login');
  };

  return (
    <div>
      <header>
        <h1> Main Container</h1>
        <div className='header-right'>
          <p>
            is KYC done? <strong>{kycDone ? 'YES' : 'NO'}</strong>
          </p>
          {user && <button onClick={handleLogout}>Logout</button>}
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};
