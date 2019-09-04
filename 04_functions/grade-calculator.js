/// here is the grade calculator application
// 0-59 F ----- 60-75 C ----- 76-89 B ---- 90-100 A
let gradeCalculate = function(total, score) {
    return (score / total) * 100;
}
let print = function(stGrade, tScore, status) {
    console.log(`You got ${stGrade}% from ${tScore * 5}%, result: ${status}`);
}

let grade = gradeCalculate(20, 10);
if (grade >= 0 && grade <= 59) {
    print(grade, 20, 'F');
} else if (grade >= 60 && grade <= 75) {
    print(grade, 20, 'C');
} else if (grade > 75 && grade <= 89) {
    print(grade, 20, 'B');
} else if (grade > 89 && grade <= 100) {
    print(grade, 20, 'A');
} else {
    console.log('Your Score is not valid');
}