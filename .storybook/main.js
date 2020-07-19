module.exports = {
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    // '@storybook/addon-notes/register',
  ],
  stories: ['../src/**/*.stories.tsx'],
}
