import { useState } from 'react';
import './App.css';
import { Common } from './components/molecules/Common';
import { Router } from './Router';
import { Context } from './store';

function App() {
  const [context, setContext] = useState({
    user: null, kycDone: false
  });

  return (
    <Context.Provider value={[context, setContext]}>
      <Common kycDone={context.kycDone}>
        <Router />
      </Common>
    </Context.Provider>
  );
}

export default App;
