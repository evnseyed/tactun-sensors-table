import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SelectedMenu } from './selected-menu';

export default {
  title: 'Sensors Table/SelectedMenu',
  component: SelectedMenu,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof SelectedMenu>;

const Template: ComponentStory<typeof SelectedMenu> = (args) => <SelectedMenu {...args} />;

export const Example = Template.bind({});
Example.args = { selectedSensorsCount: 7 }