// code your solution here

function saturdayFun(activity = "roller-skate"){
   
    const msg = `This Saturday, I want to ${activity}!`
        return msg;
}

function mondayWork(activity = "go to the office"){
    const msg = `This Monday, I will ${activity}.`
    return msg;
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
