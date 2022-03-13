import React from 'react';
import type { VFC } from 'react';

import './sidebar.styles.scss';
import { SidebarButton } from './sidebar-button/sidebar-button';

interface SidebarProps {}

export const Sidebar: VFC<SidebarProps> = ({}) => {
  return (
    <div className="sidebar">
      <SidebarButton className="sidebar__button" />
    </div>
  );
};
