/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Hanken Grotesk"', 'sans-serif']
      },
      colors: {
        // primary
        'light-red': 'hsl(0, 100%, 67%)',
        'orange-yellow': 'hsl(39, 100%, 56%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',
        // neutral
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
        // gradients
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        'base': ['16px', '21px'],
        'lg': ['18px', '23px'],
        '2xl': ['24px', '31px'],
        '3xl': ['32px', '42px']
      },
      boxShadow: {
        '3xl': '0 30px 60px 0 hsla(224, 82%, 58%, 0.15)',
      }
    }
  },
  plugins: [],
}
