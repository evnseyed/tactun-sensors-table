import React from 'react';
import type { VFC } from 'react';

import { Button as BlueprintjsButton, ButtonProps as BlueprintjsButtonProps } from '@blueprintjs/core';

import './button.styles.scss';

interface ButtonProps extends BlueprintjsButtonProps {
  text: string;
}

export const Button: VFC<ButtonProps> = ({ text, ...blueprintjsButtonProps }) => {
  return (
    <BlueprintjsButton {...blueprintjsButtonProps} >
      { text }
    </BlueprintjsButton>
  );
};
