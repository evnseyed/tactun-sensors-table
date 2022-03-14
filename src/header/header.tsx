import React from 'react';
import type { VFC } from 'react';

import './header.styles.scss';
import { HeaderHomeButton } from './header-home-button/header-home-button';
import { HeaderButton } from './header-button/header-button';
import { HeaderNetworkButton } from './header-network-button/header-network-button'
import { HeaderAccountIcon } from './header-account-icon/header-account-icon';

export const Header: VFC<{}> = () => {
  return (
    <header className="header">
      <HeaderHomeButton />
      <HeaderButton text="Create Test"/>
      <HeaderButton text="Run Station"/>
      <HeaderButton text="Run Test"/>
      <HeaderButton text="Analyze Test"/>
      <HeaderNetworkButton className="header__network-button"  />
      <HeaderAccountIcon className="header__account-icon" />
    </header>
  );
}
