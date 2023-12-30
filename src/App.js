// app.js
import React from 'react';

import Greet from './Component/Greet';

const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>;
};

function App() {
  return (
    <div className="App">
      <Alert>
        <DeleteButton />
        <Greet />
      </Alert>
    </div>
  );
}

export default App;
