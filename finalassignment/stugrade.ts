//create a program to calculate students grades
let engMarks = 75;
let urduMarks = 88;
let avgScore = (engMarks + urduMarks) / 2;
let Grade;
if (avgScore >= 80) { Grade = "A" }
else if (avgScore >= 70 && avgScore < 80) { Grade = "B" }
else if (avgScore >= 60 && avgScore < 70) { Grade = "C" }
else if (avgScore < 60 ) { Grade = "Fail" };
console.log("Grade= "+ Grade);
