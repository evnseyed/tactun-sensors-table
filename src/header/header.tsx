import React from 'react';
import type { VFC } from 'react';

import './header.scss';
import { HeaderHomeButton } from './header-home-button/header-home-button'
export const Header: VFC<{}> = () => {
  return (
    <header className="header">
      <HeaderHomeButton />
    </header>
  );
}
