import React from 'react';
import type { VFC } from 'react';
import { Checkbox as BlueprintjsCheckbox } from '@blueprintjs/core'

import './checkbox.styles.scss';

interface CheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void
}

export const Checkbox: VFC<CheckboxProps> = ({ value, onChange }) => {
  const onChangeHandler = () => {
    onChange(!value);
  };

  return (
    <BlueprintjsCheckbox
      className="checkbox"
      checked={value}
      onChange={onChangeHandler}
    />
  );
};
