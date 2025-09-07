import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Reusable button component with primary and secondary variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'text' },
    },
  },
};

export const Primary = {
  args: {
    children: 'Get Started',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'Learn More',
    variant: 'secondary',
  },
};

export const WithIcon = {
  args: {
    children: 'Get Started',
    variant: 'primary',
    icon: '→',
  },
};

export const Disabled = {
  args: {
    children: 'Get Started',
    variant: 'primary',
    disabled: true,
  },
};
