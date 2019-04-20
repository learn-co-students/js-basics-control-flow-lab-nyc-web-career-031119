// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let message
  if (feet <= 400) {
    message = "This one is on me!"
  } else if (feet > 2500) {
    message = "No can do."
  } else if (feet > 2000){
    message = "I will gladly take your thirty bucks."
  }
  return message
};

function ternaryCheckCity(city) {
  let response
  (city === "NYC") ? response = "Ok, sounds good." : response = "No go."

  return response
};

function switchOnCharmFromTip(tip) {
  let charm
  switch (tip) {
    case 'generous':
      charm = "Thank you so much."
      break;
    case 'not as generous':
      charm = "Thank you."
      break;
    default:
      charm = "Bye."
      break;
  }

  return charm
};
