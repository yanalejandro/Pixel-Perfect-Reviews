const intro = require('intro.js');
const introJs = intro.introJs();
introJs.setOptions({
  steps: [
    {
      intro: "Welcome to Pixel Perfect Reviews!"
    },
    {
      element: document.querySelector('#step1'),
      intro: "you can see the most popular games and their reviews"
    },
    {
      element: document.querySelectorAll('#step2')[0],
      intro: "up here you can signup for this website and make your own reviews!",
      position: 'right'
    },
    {
      element: '#step3',
      intro: 'Yoshi!',
      position: 'left'
    },
    // {
    //   element: '#step4',
    //   intro: "Another step.",
    //   position: 'bottom'
    // },
    // {
    //   element: '#step5',
    //   intro: 'Get it, use it.',
    //   position: 'bottom'
    // }
  ]
}).start();

// Check the dont Show Again cookies first and then display the tour
introJs().setOption("dontShowAgain", true).start();

introJs().onbeforeexit(function() {
  return confirm("are you sure?")
}).start();