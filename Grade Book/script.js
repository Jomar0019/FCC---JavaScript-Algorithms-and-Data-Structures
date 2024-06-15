// ACTIVITY 1 

function getAverage(scores) {


  // ------------ REDUCE 
  // let total = scores.reduce((acc, curr) => {
  //   return acc + curr
  // })

  // const average = total / scores.length;

  // return average;


  // ------------- FOR LOOP 
  let average = 0;

  for (let i = 0; i < scores.length; i++) {
    average += scores[i] / scores.length;
  }

  return average;


  // -------------- FOR EACH 
  // let average = 0;

  // scores.forEach(num => {
  //   average += num / scores.length
  // });

  // return average
}



// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));


// ACTIVITY 2 

function getGrade(score) {
  if(score === 100) return "A++"
  if(score >= 90) return "A"
  else if(score >= 80) return "B"
  else if(score >= 70) return "C"
  else if(score >= 60) return "D"
  else return "F"
}

// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(56));

// ACTIVITY 3 

function hasPassingGrade(score) {

  if(getGrade(score) === "F") return true 
  else return false
  
}


// console.log(hasPassingGrade(100));
// console.log(hasPassingGrade(53));
// console.log(hasPassingGrade(87));


// ACTIVITY 4 
function studentMsg(totalScores, studentScore) {
  
  if(getGrade(studentScore) === "F") {
    return (
      `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`
    )
  } else {
    return (
      `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`
    )
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
