import React from 'react';
import classNames from 'classnames';
import { Heart } from 'react-feather';
import { Button, useButton } from '../../library';

function TouchedButton(props) {
  const { onClick } = props;
  const { disabled, touched } = useButton();

  const buttonClass = classNames({
    button: true,
    'button--disabled': touched || disabled,
  });

  const iconClass = classNames({
    button__icon: true,
    'button__icon--success': touched,
  });

  const label = touched ? 'Liked' : 'Like';

  return (
    <button className={buttonClass} disabled={touched || disabled} onClick={onClick}>
      {label}
      <Heart className={iconClass} />
    </button>
  );
}

export default Button(TouchedButton);
