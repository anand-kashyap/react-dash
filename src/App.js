import { useState } from 'react';
import './App.css';
import { Router } from './Router';
import { Context } from './store';

function App() {
  const [context, setContext] = useState({
    user: null, kycDone: false
  });

  return (
    <Context.Provider value={[context, setContext]}>
      <Router />
    </Context.Provider>
  );
}

export default App;
