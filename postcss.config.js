const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    plugins: [
      require('postcss-easy-import'),
      require('tailwindcss')('./tailwind.config.js'),
      isProd ? require('@fullhuman/postcss-purgecss')({
        content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }) : undefined,
      require('autoprefixer'),
      require('cssnano'),
    ],
  }