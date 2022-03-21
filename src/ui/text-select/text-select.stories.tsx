import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextSelect } from './text-select';

export default {
  title: 'UI/TextSelect',
  component: TextSelect,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof TextSelect>;

const Template: ComponentStory<typeof TextSelect> = (args) => <TextSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      text: 'First'
    },
    {
      text: 'Second'
    },
  ],
  buttonProps: {
    text: 'Text select'
  },
  onSelect: (item) => { console.log('TextSelect::onSelect::', item)}
}