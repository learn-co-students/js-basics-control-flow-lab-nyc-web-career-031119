// Write your code in this file!
function scuberGreetingForFeet(num) {
  if (num <= 400) {
    return 'This one is on me!';
  }
  else if (num > 2000) {
    return 'I will gladly take your thirty bucks.'';
  }
  else (num > 2500){
    return 'No can do.'
  }
}



function ternaryCheckCity(city) {
  if (city == 'NYC') {
    return 'Ok, sounds good.'
  }
  else  {
    return 'No go.'
  }
}

// function switchOnCharmFromTip(tip) {
//   if (tip = 'generous') {
//     return 'Thank you so much.'
//   }
//   else if (tip = 'not as generous') {
//     return 'Thank you.'
//   }
//   else if (tip = 'thanks for everything') {
//     return 'Bye.'
//   }
// }

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous.';
      return 'Thank you.';
    return 'Bye.';

  }
}
