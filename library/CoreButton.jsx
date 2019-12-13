import React, { forwardRef, useRef, useState } from 'react';
import { ButtonContext } from './context';

const CoreButton = (Component) => forwardRef((props, outerRef) => {
  const [busy, setBusy] = useState(false);
  const [disabled, setDisabled] = useState(props.disabled);
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(0);
  const innerRef = useRef();
  const ref = outerRef || innerRef;

  function handleDisableChange(disable) {
    setDisabled(disable);

    if (disable) {
      setFocused(false);
    }
  }

  function handleClick(event) {
    event.persist();

    setTouched(touched + 1);

    if (props.onClick) {
      props.onClick(event, {
        busy,
        ref,
        setBusy,
        setDisabled: handleDisableChange,
        touched,
      });
    }
  }

  function handleFocus(event) {
    event.persist();

    setFocused(true);

    if (props.onFocus) {
      props.onFocus(event, { ref });
    }
  }

  function handleBlur(event) {
    event.persist();

    setFocused(false);

    if (props.onBlur) {
      props.onBlur(event, { ref });
    }
  }

  return (
    <ButtonContext.Provider value={{ busy, disabled, focused, ref, touched }}>
      <Component
        {...props}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </ButtonContext.Provider>
  );
});

export default CoreButton;
