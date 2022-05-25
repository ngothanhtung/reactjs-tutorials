import React from 'react';
import { Button as MButton } from '@material-ui/core';

const Button = (props) => {
  return <MButton {...props}>{props.label}</MButton>;
};

export default {
  title: 'Material/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    disableElevation: {
      control: 'boolean',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    color: {
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary'],
      },
    },
  },
};

const Template = (args) => (
  <Button variant='contained' {...args}>
    {args.label}
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  disableElevation: false,
  disabled: false,
  color: 'primary',
  label: 'Button',
};
