import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';
import { ArrowHollowDownIcon } from '../../icons';

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Group', onClick: () => { alert('Click!!!') } };


export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  text: 'More Actions',
  onClick: () => { alert('Click!!!') },
  rightIcon: <ArrowHollowDownIcon />
};
