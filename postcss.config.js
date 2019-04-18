const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      flexbox: true,
      grid: 'autoplace',
      browsers: [
        '>1%',
        'last 4 versions',
      ],
    }),
  ],
};
