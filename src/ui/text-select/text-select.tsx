import React from 'react';
import type { VFC } from 'react';
import { Select, SelectProps } from '../select/select';
import { ItemRenderer } from '@blueprintjs/select';
import { MenuItem } from '@blueprintjs/core';

export interface TextItem {
  text: string,
}

export interface TextSelectProps {
  items: TextItem[],
  onSelect: (item: TextItem) => void,
  buttonProps: SelectProps<TextItem>['buttonProps'],

}

export const TextSelect: VFC<TextSelectProps> = ({ items, onSelect, buttonProps}) => {
  const itemRenderer: ItemRenderer<TextItem> = (item, { handleClick, modifiers, query }) => {
    return (
      <MenuItem
        text={item.text}
        active={modifiers.active}
        disabled={modifiers.disabled}
        onClick={handleClick}
      />
    );
  }
  
  return (
    <Select<TextItem>
      items={items}
      onItemSelect={onSelect}
      buttonProps={buttonProps}
      itemRenderer={itemRenderer}
    />
  );
};
