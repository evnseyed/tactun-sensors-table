import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from './title';

export default {
  title: 'Title',
  component: Title,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Example = Template.bind({});
Example.args = {
  text: 'Sensors'
}