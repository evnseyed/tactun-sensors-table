import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from './switch';

export default {
  title: 'Switch',
  component: Switch,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Example = Template.bind({});