import WelcomeScreen from './WelcomeScreen';

export default {
  title: 'Screens/WelcomeScreen',
  component: WelcomeScreen,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#ffffff',
        },
      ],
    },
    docs: {
      description: {
        component: 'Welcome screen for SaptMarkets mobile app with glassmorphism design, animated background, and modern UI. Click "Start Shopping" to navigate to the home screen.',
      },
    },
  },
  argTypes: {
    onGetStarted: { 
      action: 'get-started-clicked',
      description: 'Callback function called when the "Start Shopping" button is clicked'
    },
  },
};

export const Default = {
  args: {
    onGetStarted: () => console.log('Get Started clicked! Navigate to home screen.'),
  },
};

export const WithCustomAction = {
  args: {
    onGetStarted: () => alert('Welcome to Sapt Markets! Navigating to home screen...'),
  },
};
