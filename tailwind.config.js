/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'ARGODEON': "url('./components/img/ARGODEON.jpeg')",
        'download': "url('./components/img/download.jpeg')",
      },
      fontFamily: {
        custom: ['Dancing Script' ,'sans-serif'],
        custom1:['Ephesis','Canveat','sans-serif'],
      },
      videoBackground: {
        'cherry-blossom': "url('./components/img/cherry blossom. [lofi jazzhop chill mix] (online-video-cutter.com).mp4')",
      },
    },
  },
  plugins: [],
}

