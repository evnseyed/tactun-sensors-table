import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderButton } from './header-button';

export default {
  title: 'HeaderButton',
  component: HeaderButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof HeaderButton>;

const Template: ComponentStory<typeof HeaderButton> = (args) => (
  <div style={{ height: 80}}>
    <HeaderButton {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = { text: 'Header button', onClick: () => { alert('Click!') } }