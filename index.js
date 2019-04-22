// Write your code in this file!
function scuberGreetingForFeet(input){
  let result;
  if (input < 400){
    result = "This one is on me!"
  } else if (input > 2500){
    result = "No can do."
  } else if (input > 2000){
    result = "I will gladly take your thirty bucks."
  }
  return result;
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

let response;
function switchOnCharmFromTip(input){
  switch (input) {
    case "generous":
      response = "Thank you so much."
      break;
    case "not as generous":
      response = 'Thank you.'
      break;
    default:
      response = 'Bye.'
      break;
  }
  return response;
}
