import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SensorsTableCounter } from './sensors-table-counter';

export default {
  title: 'SensorsTableCounter',
  component: SensorsTableCounter,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof SensorsTableCounter>;

const Template: ComponentStory<typeof SensorsTableCounter> = (args) => <SensorsTableCounter {...args} />;

export const Example = Template.bind({});
Example.args = { count: 45 }