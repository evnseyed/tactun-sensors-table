import React, { useState } from 'react';
import type { FC } from 'react';

import { Button, Intent } from '@blueprintjs/core';
import type { ButtonProps } from '@blueprintjs/core/lib/esm/components/button/abstractButton';
import './header-network-button.styles.scss';
import { HeaderNetworkDisconnectIcon } from './header-network-disconnect.icon'

interface HeaderNetworkButtonProps extends Pick<ButtonProps, 'className'> {}

type NetworkStatus = 'connect' | 'connecting' | 'disconnect';

export const HeaderNetworkButton: FC<HeaderNetworkButtonProps> = ({ className }) => {
  const [status, setStatus] = useState<NetworkStatus>('disconnect');

  let label = 'Connecting';

  if(status === 'connect') {
    label = 'Connect';
  } else if(status === 'disconnect') {
    label = 'Disconnect';
  };

  const onClickHandler = () => {
    console.warn('Connect to servers temporarily unavailable');
  }

  return (
    <Button
      className={className + ' header-network-button'}
      icon={<HeaderNetworkDisconnectIcon />}
      intent={Intent.DANGER}
    >
      {label}
    </Button>
  );
};
