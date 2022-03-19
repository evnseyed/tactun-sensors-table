import React from 'react';
import type { VFC } from 'react';
import { Checkbox as BlueprintjsCheckbox } from '@blueprintjs/core'

import './checkbox.styles.scss';

export interface CheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
  className?: string;
}

export const Checkbox: VFC<CheckboxProps> = ({ value, onChange, className = '' }) => {
  const onChangeHandler = () => {
    onChange(!value);
  };

  return (
    <BlueprintjsCheckbox
      className={`checkbox ${className}`}
      checked={value}
      onChange={onChangeHandler}
    />
  );
};
