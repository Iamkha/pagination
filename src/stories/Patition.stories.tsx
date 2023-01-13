import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../index.css';
import DataPatition from '../component/DataPatition';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export default {
  title: 'Example/ patition',
  component: DataPatition,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof DataPatition>;

const Template: ComponentStory<typeof DataPatition> = (args) => (
  <DataPatition {...args}></DataPatition>
);

export const Demo = Template.bind({});
Demo.args = {
  valueInput: 4,
  item: 5,
  dataP: 70,
  lenghtonClick: 10,
};
Demo.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const Input = canvas.getByLabelText('name', {
    selector: 'input',
  });
  await userEvent.type(Input, 'WrongInput', {
    delay: 100,
  });
};
