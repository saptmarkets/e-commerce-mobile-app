import React from 'react';
import { action } from '@storybook/addon-actions';
import HomeScreen from './HomeScreen';

export default {
  title: 'Screens/HomeScreen',
  component: HomeScreen,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Main home screen with glassmorphism design and bottom navigation',
      },
    },
  },
  argTypes: {
    onNavigate: { action: 'navigated' },
  },
};

const Template = (args) => <HomeScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
  onNavigate: action('navigated'),
};

export const WithCustomNavigation = Template.bind({});
WithCustomNavigation.args = {
  onNavigate: (screen) => {
    action('navigated')(screen);
    console.log(`Navigating to: ${screen}`);
  },
};
