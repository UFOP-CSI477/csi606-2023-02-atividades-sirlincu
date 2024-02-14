import Home from '../src/pages/Home/index.tsx'
import GlobalStyles from './styles/GlobalStyles.ts'
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

    return (
      <>
        <Home />
        <GlobalStyles />
      </>
    )
}

export default App;
