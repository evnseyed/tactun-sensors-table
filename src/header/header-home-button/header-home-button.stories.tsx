import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderHomeButton } from './header-home-button';

export default {
  title: 'HeaderHomeButton',
  component: HeaderHomeButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof HeaderHomeButton>;

const Template: ComponentStory<typeof HeaderHomeButton> = (args) => (
  <div style={{height: 80}}>
    <HeaderHomeButton {...args} />
  </div>
);

export const Example = Template.bind({});