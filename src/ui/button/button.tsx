import React, { ReactNode } from 'react';
import type { VFC } from 'react';

import { Button as BlueprintjsButton, ButtonProps as BlueprintjsButtonProps } from '@blueprintjs/core';

import './button.styles.scss';

export interface ButtonProps extends Omit<BlueprintjsButtonProps, 'rightIcon'> {
  text: string;
  rightIcon?: ReactNode;
}

export const Button: VFC<ButtonProps> = ({ text, rightIcon, ...blueprintjsButtonProps }) => {
  return (
    <BlueprintjsButton
      {...blueprintjsButtonProps}
      rightIcon={
        <div className="button__right-icon">
          {rightIcon}
        </div>
      }
    >
      { text }
    </BlueprintjsButton>
  );
};
