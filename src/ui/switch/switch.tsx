import React from 'react';
import type { VFC } from 'react';
import { Switch as BlueprintjsSwitch } from '@blueprintjs/core';

import './switch.styles.scss';

export interface SwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
  className?: string;
}

export const Switch: VFC<SwitchProps> = ({className, value, onChange}) => {
  const onChangeHandler = () => {
    onChange(!value);
  };

  return (
    <BlueprintjsSwitch
      className={className}
      checked={value}
      onChange={onChangeHandler}
    />
  );
};
