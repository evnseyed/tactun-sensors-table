import React from 'react';
import type { VFC } from 'react';

import logo from '../../logo.svg';
import './header-home-button.scss';

interface HeaderHomeButtonProps {};

export const HeaderHomeButton: VFC<HeaderHomeButtonProps> = ({}) => {
  const onClickHandler = () => { console.warn('Move to home screen is unavailable') };

  return (
    <button
      className="header-home-button"
      onClick={onClickHandler}
    >
      <img src={logo} />
    </button>
  );
};