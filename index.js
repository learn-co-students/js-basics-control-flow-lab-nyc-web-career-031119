// Write your code in this file!
function scuberGreetingForFeet(distance) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  let response;

  if (distance <= 400) {
    response = "This one is on me!"
  } else if (distance <= 2500) {
    response = "I will gladly take your thirty bucks."
  } else {
    response = "No can do."
  }

  return response;
}

function ternaryCheckCity(city) {
  let response = city === "NYC" ? "Ok, sounds good." : "No go."
  return response;
}

function switchOnCharmFromTip(tip) {
  let response;
  switch (tip) {
    case "generous":
      response = "Thank you so much."
      break;
    case "not as generous":
      response= "Thank you."
      break;
    default:
      response= "Bye."
      break;
  }
  return response;
}
