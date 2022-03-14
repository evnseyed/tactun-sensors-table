import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SidebarButton } from './sidebar-button';

export default {
  title: 'SidebarButton',
  component: SidebarButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof SidebarButton>;

const Template: ComponentStory<typeof SidebarButton> = (args) => <SidebarButton {...args} />;

export const Example = Template.bind({});