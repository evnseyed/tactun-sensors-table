import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './checkbox';

export default {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      < Checkbox value={isChecked} onChange={(newValue) => { setIsChecked(newValue)} } />
    </div>
  );
}

export const Example = Template.bind({});
