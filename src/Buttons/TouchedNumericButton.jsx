import React from 'react';
import { Button, useButton } from '../../library';

function TouchedNumericButton(props) {
  const { onClick } = props;
  const { touched } = useButton();

  return (
    <button className="button" onClick={onClick}>
      {`Pressed ${touched} times`}
    </button>
  );
}

export default Button(TouchedNumericButton);
