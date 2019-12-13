import React from 'react';
import { Button, useButton } from '../../library';

function TouchedButton(props) {
  const { onBlur, onFocus } = props;
  const { focused } = useButton();

  return (
    <button type="button" className="button" onFocus={onFocus} onBlur={onBlur}>
      {`Button ${focused ? '(focused)' : ''}`}
    </button>
  );
}

export default Button(TouchedButton);
