import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../blueprint.scss';

import { HeaderNetworkButton } from './header-network-button';

export default {
  title: 'HeaderNetworkButton',
  component: HeaderNetworkButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof HeaderNetworkButton>;

const Template: ComponentStory<typeof HeaderNetworkButton> = (args) => <HeaderNetworkButton {...args} />;

export const Example = Template.bind({});
