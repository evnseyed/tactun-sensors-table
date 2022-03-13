import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderAccountIcon } from './header-account-icon';

export default {
  title: 'HeaderAccountIcon',
  component: HeaderAccountIcon,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof HeaderAccountIcon>;

const Template: ComponentStory<typeof HeaderAccountIcon> = (args) => <HeaderAccountIcon {...args} />;

export const Example = Template.bind({});
Example.args = {
  onClick: () => {
    console.warn('Account temporarily unavailable')
  }
}