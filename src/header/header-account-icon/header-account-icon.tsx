import React from 'react';
import type { VFC, ButtonHTMLAttributes } from 'react';

import './header-account-icon.styles.scss';
import accountIcon from './header-account-icon-mock.png';

interface HeaderAccountIconProps extends ButtonHTMLAttributes<HTMLButtonElement>  {}

export const HeaderAccountIcon: VFC<HeaderAccountIconProps> = ({className, ...buttonProps}) => {

  return (
    <button
      className={className + ' header-account-icon'}
      {...buttonProps}
    >
      <img src={accountIcon} className="header-account-icon__icon" />
    </button>
  );
};
