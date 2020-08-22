import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { Button } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
});

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
