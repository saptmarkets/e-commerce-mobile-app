import React from 'react';
import CategoriesScreen from '../CategoriesScreen';

export default {
  title: 'Screens/CategoriesScreen',
  component: CategoriesScreen,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Categories screen displaying all available product categories with beautiful background images and glassmorphism design.'
      }
    }
  },
  argTypes: {
    onNavigate: { action: 'navigated' }
  }
};

const Template = (args) => <CategoriesScreen {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithNavigation = Template.bind({});
WithNavigation.args = {
  onNavigate: (screen) => console.log(`Navigating to: ${screen}`)
};
