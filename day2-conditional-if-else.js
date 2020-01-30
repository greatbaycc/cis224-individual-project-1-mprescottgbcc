

function getGrade(score) {
    let grade;
    score = Number(score);

    //scores greater than 25 and less than or equal to 30 are an A
    if (score > 30) {
        grade = 'invalid';
    } else if (score > 25) {
        grade = 'A';
    } else if (score > 20) {
        grade = 'B';
    } else if (score > 15) {
        grade = 'C';
    } else if (score > 10) {
        grade = 'D';
    } else if (score > 5) {
        grade = 'E';
    } else if (score >= 0) {
        grade = 'F';
    } else {
        grade = 'invalid';
    }
    
    return grade;
}

