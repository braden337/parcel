import React, {Fragment, useState} from 'react';
import Hello from './components/Hello';

function App() {
  let [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <Fragment>
      <Hello name="it works" />
      <button style={{fontSize: '1rem'}} onClick={increment}>
        {count}
      </button>
    </Fragment>
  );
}

export default App;
