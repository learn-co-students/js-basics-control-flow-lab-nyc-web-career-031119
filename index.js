// Write your code in this file!
function scuberGreetingForFeet(number){
  let greeting;
  if (number <= 400) {
    greeting = `This one is on me!`
  }
  else if (number > 2000) {
    greeting = `I will gladly take your thirty bucks.`
    if (number > 2500) {
      greeting = `No can do.`
    }
  };
  return greeting;
};

function ternaryCheckCity(city) {
  return city === `NYC` ? `Ok, sounds good.` : `No go.`
};

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case `generous`:
      return `Thank you so much.`;
      break;
    case `not as generous`:
      return `Thank you.`;
      break;
    default:
      return `Bye.`;
  };
};
