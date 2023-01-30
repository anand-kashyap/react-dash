import React, { useContext } from 'react';
import { KYCForm } from '../components/molecules/KYCForm';
import { Context } from '../store';

export default function Home() {
  const [context] = useContext(Context);

  return (
    <div>
      Home Page. show kyc
      <KYCForm isKYCDone={context.kycDone} />
    </div>
  );
}
