import React from 'react';
import type { VFC } from 'react';
import type { IconProps } from './icons.types';

export const SearchIcon: VFC<IconProps> = ({ className }) => {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#737373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23 23L15 15" stroke="#737373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
