import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breadcrumbs } from './breadcrumbs';
import { IBreadcrumbProps } from '@blueprintjs/core';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

const breadCrumbsData: IBreadcrumbProps[] = [
  {
    text: 'First'
  },
  {
    text: 'Secons'
  },
  {
    text: 'Third'
  }
]

export const Example = Template.bind({});
Example.args = { items: breadCrumbsData }