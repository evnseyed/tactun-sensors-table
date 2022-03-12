import React from 'react';
import type { VFC, ButtonHTMLAttributes } from 'react';

import './header-button.styles.scss';

interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const HeaderButton: VFC<HeaderButtonProps> = ({ text, ...buttonProps }) => {
  return (
    <button className="header-button" {...buttonProps}>
      {text}
    </button>
  );
};
