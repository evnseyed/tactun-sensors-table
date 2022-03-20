import React, { useRef } from 'react';
import type { VFC } from 'react';

import './selected-menu.styles.scss';
import { Button, ButtonProps } from '../../ui/button/button';

interface SelectedMenuProps {
  selectedSensorsCount: number;
}

export const SelectedMenu: VFC<SelectedMenuProps> = ({ selectedSensorsCount }) => {

  return (
    <section className="selected-menu">
      <div className="selected-menu__counter">
        { selectedSensorsCount } selected
      </div>

      <div className="selected-menu__buttons">
        <Button text="Group" />
        <Button text="Delete" />
        <Button text="Export" />
      </div>

    </section>
  );
};
