import React from 'react';
import type { VFC } from 'react';

import './header.scss';
import { HeaderHomeButton } from './header-home-button/header-home-button';
import { HeaderButton } from './header-button/header-button';
import { HeaderNetworkButton } from './header-network-button/header-network-button'

export const Header: VFC<{}> = () => {
  return (
    <header className="header">
      <HeaderHomeButton />
      <HeaderButton text="Create Test"/>
      <HeaderButton text="Run Station"/>
      <HeaderButton text="Run Test"/>
      <HeaderButton text="Analyze Test"/>
      <HeaderNetworkButton className="header__network-button"  />
    </header>
  );
}
