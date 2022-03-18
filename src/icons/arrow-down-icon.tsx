import React from 'react';
import type { VFC } from 'react';
import type { IconProps } from './icons.types';

export const ArrowDownIcon: VFC<IconProps> = ({ className }) => {
  return (
    <svg className={className} width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0H0L6 6L12 0Z" fill="#737373"/>
    </svg>
  );
};
