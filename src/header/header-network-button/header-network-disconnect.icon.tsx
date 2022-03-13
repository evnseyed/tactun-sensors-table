import React from 'react';
import type { VFC } from 'react';

interface HeaderNetworkDisconnectIconProps {}

export const HeaderNetworkDisconnectIcon: VFC<HeaderNetworkDisconnectIconProps> = ({}) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 31L7 25" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M31 1L25 7" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M7.00007 17L9.00009 15L17.0001 23L15.0001 25C13.0001 27 10.0001 28 7.00009 25C4.00011 22 5.00004 19 7.00007 17Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
      <path d="M24.9999 15L22.9999 17L14.9999 9L16.9999 7C18.9999 5 21.9999 4 24.9999 7C27.9999 10 27 13 24.9999 15Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
      <path d="M6 6L26 26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
