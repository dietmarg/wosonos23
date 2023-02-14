module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#0369A1',
              '&:hover': {
                color: '#0284C7',
              },
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
};
