/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
    },
    fontSize: {
    "3vh": "3vh" ,
    "4rem": "4rem" ,
    "8xl": "6vw" ,//主体字体一号
    "9xl": "5.6vh" ,
    "10xl": "8.5vh" ,
    "11xl": "5.5vw" ,
    'small':"1.4vw",
  }, 
  inset: {
    '4/5':'80%',
    '1/2':"50%",
    '65':"65%",
    '65':"65%",
    '70':"70%",
    "75vh":'75vh'
  }

  },
  plugins: [],
};
