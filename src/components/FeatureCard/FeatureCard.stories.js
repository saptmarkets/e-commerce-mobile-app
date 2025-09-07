import FeatureCard from './FeatureCard';

export default {
  title: 'Components/FeatureCard',
  component: FeatureCard,
  parameters: {
    docs: {
      description: {
        component: 'Feature card component with icon and text for highlighting app features.',
      },
    },
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['shopping', 'star', 'users'],
    },
    text: {
      control: { type: 'text' },
    },
    delay: {
      control: { type: 'number' },
    },
  },
};

export const Shopping = {
  args: {
    icon: 'shopping',
    text: 'Easy Shopping',
  },
};

export const Star = {
  args: {
    icon: 'star',
    text: 'Quality Products',
  },
};

export const Users = {
  args: {
    icon: 'users',
    text: 'Trusted Sellers',
  },
};

export const WithDelay = {
  args: {
    icon: 'shopping',
    text: 'Easy Shopping',
    delay: 0.5,
  },
};
