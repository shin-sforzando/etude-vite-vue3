module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  async viteFinal(config) {
    config.resolve.alias['@'] = `${__dirname}/../src`
    return {
      ...config,
      build: {
        ...config.build,
        sourcemap: true,
      },
    }
  },
  docs: {
    autodocs: true,
  },
}
