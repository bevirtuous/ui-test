import React, { Fragment } from 'react';
import { Button, useButton } from '../library';

function MyButton(props) {
  const { disabled, focused, touched, ref } = useButton();
  const { children, onClick, onFocus, onBlur } = props;

  return (
    <Fragment>
      <button disabled={disabled} ref={ref} onClick={onClick} onFocus={onFocus} onBlur={onBlur}>
        {children}
      </button>
      <p>{`Disabled: ${disabled}`}</p>
      <p>{`Focused: ${focused}`}</p>
      <p>{`Touched: ${touched}`}</p>
    </Fragment>
  );
}

export default Button(MyButton);