import { hot } from 'react-hot-loader/root';
import React from 'react';
import BusyButton from './Buttons/BusyButton';
import DownloadButton from './Buttons/DownloadButton';
import FocusedButton from './Buttons/FocusedButton';
import TouchedButton from './Buttons/TouchedButton';
import TouchedNumericButton from './Buttons/TouchedNumericButton';
import './style.css';

function App() {
  function handleDownload(_, { setBusy, setDisabled }) {
    setBusy(true);
    setDisabled(true);

    setTimeout(() => {
      setBusy(false);
      setDisabled(false);
    }, 2500);
  }

  function handleBusyButton(_, { setBusy }) {
    setBusy(true);

    setTimeout(() => {
      setBusy(false);
    }, 2500);
  }

  return (
    <>
      <h3>Focused</h3>
      <p>Reacts when focused. Not only styles can be changed.</p>
      <FocusedButton />

      <h3>Touched</h3>
      <p>Perform one-time actions on a button</p>
      <TouchedButton />

      <h3>Touched (Counter)</h3>
      <p>React to number of times a button was pressed</p>
      <TouchedNumericButton />

      <h3>Busy</h3>
      <p>Buttons can become busy on demand</p>
      <BusyButton onClick={handleBusyButton} />

      <h3>Composable</h3>
      <p>Easily compose the features to create complex buttons</p>
      <DownloadButton onClick={handleDownload} />
    </>
  );
}

export default hot(App);
