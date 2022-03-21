import React from 'react';
import type { VFC } from 'react';

import './sensors-table-counter.styles.scss';

interface SensorsTableCounterProps {
  count: number;
}

export const SensorsTableCounter: VFC<SensorsTableCounterProps> = ({count}) => {
  return (
    <div className="sensors-table-counter">
      {count} Items
    </div>
  );
};
