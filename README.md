# SaptMarkets Design System

A comprehensive design system for the SaptMarkets mobile app, built with React, Storybook, and Styled Components.

## Features

- 🎨 **Complete Design System** - Colors, typography, spacing, and components
- 📱 **Mobile-First Design** - Optimized for mobile devices (393px width)
- 🌍 **Arabic Text Support** - Full RTL support with Noto Sans Arabic font
- ✨ **Smooth Animations** - Framer Motion animations for better UX
- 🧩 **Component Library** - Reusable components with Storybook documentation
- 🎯 **Brand Consistency** - Your brand colors and logo integration

## Components

### Welcome Screen
- Logo with shopping basket icon and Arabic text
- Brand name "اسواق سبت المركزية" (Sapt Central Markets)
- Slogan "كل اللي تبيه نلبيه" (Everything you want, we provide)
- Three feature cards with icons
- Call-to-action button
- Footer text

### Reusable Components
- **Logo** - Brand logo with animations
- **Button** - Primary and secondary variants
- **FeatureCard** - Icon and text display

## Setup Instructions

### 1. Install Dependencies
```bash
cd storybook_app_design
npm install
```

### 2. Start Storybook
```bash
npm run storybook
```

This will open Storybook at `http://localhost:6006`

### 3. View Components
- Navigate to "Screens/WelcomeScreen" to see the complete welcome screen
- Check individual components under "Components/"
- Test interactions and animations
- View component documentation

## Design System

### Colors
- **Brand Green**: #4CAF50 (Primary brand color)
- **Brand Purple**: #800080 (Secondary brand color)
- **Brand Purple Light**: #A9A9A9 (Slogan text)
- **Neutral Grays**: Full gray scale from #FAFAFA to #212121

### Typography
- **Arabic**: Noto Sans Arabic (for Arabic text)
- **English**: Inter (for English text)
- **Sizes**: 10px to 32px with proper weights

### Spacing
- **Base Unit**: 4px
- **Scale**: xs(4px), sm(8px), md(16px), lg(24px), xl(32px), 2xl(48px), 3xl(64px)

### Animations
- **Logo**: Fade in with bounce effect
- **Text**: Staggered fade in animations
- **Features**: Sequential appearance with hover effects
- **Button**: Scale and color transitions

## Mobile Optimization

- **Frame Size**: 393px width (iPhone 14 Pro)
- **Responsive**: Mobile-first design approach
- **Touch Targets**: Minimum 44px for interactive elements
- **Typography**: Optimized for mobile reading

## Next Steps

1. **Test on Mobile**: Use browser dev tools to test mobile view
2. **Export Assets**: Export icons and images for React Native
3. **Convert to React Native**: Use components as reference for mobile app
4. **Add More Screens**: Extend the design system with additional screens

## Development

### Adding New Components
1. Create component in `src/components/`
2. Add Storybook story in `*.stories.js`
3. Update theme if needed in `src/theme/`
4. Test in Storybook

### Customization
- Update colors in `src/theme/index.js`
- Modify typography in CSS variables
- Adjust spacing and animations as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This design system is created for SaptMarkets mobile app development.
