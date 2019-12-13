import React from 'react';
import classNames from 'classnames';
import { Loader, Save } from 'react-feather';
import { Button, useButton } from '../../library';

function TouchedButton(props) {
  const { onClick } = props;
  const { busy } = useButton();

  const Icon = busy ? Loader : Save;

  const iconClass = classNames({
    button__icon: true,
    'button__icon--busy': busy,
  });

  return (
    <button className="button" disabled={busy} onClick={onClick}>
      Save Button
      <Icon className={iconClass} />
    </button>
  );
}

export default Button(TouchedButton);
