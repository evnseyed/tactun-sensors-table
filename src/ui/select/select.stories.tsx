import React from 'react';
import {  Meta } from '@storybook/react';

import { Select } from './select';
import { ItemRenderer } from '@blueprintjs/select';
import { MenuItem } from '@blueprintjs/core';

export default {
  title: 'Select',
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as Meta;

interface ExampleItem {
  text: string
}

const exampleItems: ExampleItem[] = [
  {
    text: 'First',
  },
  {
    text: 'Second',
  },
]

export const Default = () => {
  // const [selectedItem, setSelectedItem] 
  const itemRenderer: ItemRenderer<ExampleItem> = (item, { handleClick, modifiers, query }) => {
    return (
      <MenuItem
        text={item.text}
        active={modifiers.active}
        disabled={modifiers.disabled}
        onClick={handleClick}
      />
    );
  }
  const onItemselectHandler = (item: ExampleItem) => { console.log('Select item: ', item) }

  return (
    <Select<ExampleItem>
      items={exampleItems}
      itemRenderer={itemRenderer}
      onItemSelect={onItemselectHandler}
      buttonProps={{text: 'More actions'}}
    />
  )
}