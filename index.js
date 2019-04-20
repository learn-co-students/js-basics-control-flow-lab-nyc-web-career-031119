// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue <= 399) {
    return 'This one is on me!'
  }else if (someValue >= 2001 && someValue <= 2500){
    return 'I will gladly take your thirty bucks.'
  }else {
    return 'No can do.'
  }
}
function ternaryCheckCity(city){
  let answer
  // condition ? expression1 : expression2;
  (city === 'NYC') ? answer = 'Ok, sounds good.' : answer = "No go.";
  return answer
};

function switchOnCharmFromTip(tip) {
    let charm
  switch (tip) {
    case 'generous':
      charm = "Thank you so much."
      break;
    case 'not as generous':
      charm = 'Thank you.'
      break;
    default:
      charm = "Bye."
      break;
  }

  return charm
};





// switchOnCharmFromTip(){
//
// }
// scuberGreetingForFeet()
// ternaryCheckCity(city)
