import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SensorsTable } from './sensors-table';

export default {
  title: 'SensorsTable',
  component: SensorsTable,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof SensorsTable>;

const Template: ComponentStory<typeof SensorsTable> = (args) => <SensorsTable {...args} />;

export const Example = Template.bind({});