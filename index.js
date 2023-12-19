function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  }
  else if (feet > 2500) {
    return 'No can do.';
  }
  else if (feet > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
  else {
    return 'That will be twenty bucks.';
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case tip = "generous":
      return "Thank you so much.";
      break;
    case tip = "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}