import React, { useRef } from 'react';
import type { VFC } from 'react';

import './selected-menu.styles.scss';
import { Button, ButtonProps } from '../../ui/button/button';
import { TextItem, TextSelect } from '../../ui/text-select/text-select';

interface SelectedMenuProps {
  selectedSensorsCount: number;
}

export const SelectedMenu: VFC<SelectedMenuProps> = ({ selectedSensorsCount }) => {
  const additionalActions: TextItem[] = [
    {
      text: 'Action One'
    },
    {
      text: 'ActionTwo'
    }
  ];

  const additionalActionsOnSelectHandler = (action: TextItem) => {
    console.log(`Select "${action.text}" additional action`);
  };

  return (
    <section className="selected-menu">
      <div className="selected-menu__counter">
        { selectedSensorsCount } selected
      </div>

      <div className="selected-menu__buttons">
        <Button text="Group" />
        <Button text="Delete" />
        <Button text="Export" />
        <TextSelect
          items={additionalActions}
          buttonProps={{ text: 'More actions'}}
          onSelect={additionalActionsOnSelectHandler}
        />
      </div>

    </section>
  );
};
