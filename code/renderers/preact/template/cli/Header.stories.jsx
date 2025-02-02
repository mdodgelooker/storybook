import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/preact/writing-docs/docs-page
  tags: ['docsPage'],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/preact/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut = {};
