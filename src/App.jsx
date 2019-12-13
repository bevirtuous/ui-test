import { hot } from 'react-hot-loader/root';
import React from 'react';
import MyButton from './MyButton';

function App() {
  function handleClick({ setDisabled }) {
    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
    }, 3000);
  }

  return (
    <MyButton onClick={handleClick}>This is MyButton</MyButton>
  );
}

export default hot(App);
