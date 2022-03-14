import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sidebar } from './sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <div style={{ height: '100%'}}>
    <div style={{ width: '100%', height: '80px', backgroundColor: 'Bisque'}} />
    <Sidebar {...args} />
  </div>
);

export const Example = Template.bind({});