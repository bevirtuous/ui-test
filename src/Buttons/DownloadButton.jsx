import React from 'react';
import classNames from 'classnames';
import { Loader, Download } from 'react-feather';
import { Button, useButton } from '../../library';

function DownloadButton(props) {
  const { onClick } = props;
  const { busy, disabled } = useButton();

  const Icon = busy ? Loader : Download;

  const buttonClass = classNames({
    button: true,
    'button--disabled': disabled,
  });

  const iconClass = classNames({
    button__icon: true,
    'button__icon--busy': busy,
  });

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      Download
      <Icon className={iconClass} />
    </button>
  );
}

export default Button(DownloadButton);
