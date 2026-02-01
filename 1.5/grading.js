function getGradeAndComment(score) {
  let result = { grade: "", comment: "" };

  if (score >= 90 && score <= 100) {
    result.grade = "A";
    result.comment = "Outstanding! Keep it up!";
  } else if (score >= 80 && score < 90) {
    result.grade = "B";
    result.comment = "Very good – room to reach A";
  } else if (score >= 70 && score < 80) {
    result.grade = "C";
    result.comment = "Good effort – aim higher next time";
  } else if (score >= 60 && score < 70) {
    result.grade = "D";
    result.comment = "Passing – but needs improvement";
  } else if (score >= 0 && score < 60) {
    result.grade = "F";
    result.comment = "You need to study more";
  }

  // Any score outside 0–100 → Invalid
  else {
    result.grade = "Invalid";
    result.comment = "Score must be between 0 and 100";
  }

  // Return the result object
  return result;
}

// Test a failing score → F
console.log(getGradeAndComment(59));

// Test lower boundary of passing → D
console.log(getGradeAndComment(60));

// Test high B score → B
console.log(getGradeAndComment(89.9));

// Test lower boundary of A → A
console.log(getGradeAndComment(90));

// Test perfect score → A
console.log(getGradeAndComment(100));

// Test invalid negative score
console.log(getGradeAndComment(-5));