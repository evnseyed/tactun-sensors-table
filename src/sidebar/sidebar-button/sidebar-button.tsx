import React from 'react';
import type { VFC, ButtonHTMLAttributes, MouseEventHandler } from 'react';

import './sidebar-button.styles.scss';
import sidebarOpenIcon from './sidebar-open-icon.svg';
import { usePropsClasses } from '../../hooks/use-props-classes';

interface SidebarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SidebarButton: VFC<SidebarButtonProps> = ({className, onClick, ...buttonProps}) => {
  const buttonClasses = usePropsClasses('sidebar-button', className);

  const onClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log('sidebar unavailable');

    if(onClick) {
      onClick(event);
    }
  }

  return (
    <button onClick={onClickHandler} className={buttonClasses}>
      <img src={sidebarOpenIcon} className="sidebar-button__icon"/>
    </button>
  );
};
