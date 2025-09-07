import Logo from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: 'SaptMarkets logo component that supports both image files and SVG fallback.',
      },
    },
  },
  argTypes: {
    logoSrc: {
      control: { type: 'text' },
      description: 'Path to logo image file (e.g., /logo.png)',
    },
  },
};

export const Default = {
  args: {},
};

export const WithCustomLogo = {
  args: {
    logoSrc: '/logo.png',
  },
};

export const WithSVGFallback = {
  args: {
    logoSrc: '/nonexistent-logo.png', // This will trigger the SVG fallback
  },
};
