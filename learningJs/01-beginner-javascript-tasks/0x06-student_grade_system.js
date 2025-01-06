let students = [
    { name: "Emma", grades: [85, 90, 92] },
    { name: "Liam", grades: [75, 80, 65] },
    { name: "Olivia", grades: [95, 98, 97] }
];

console.log("Student Grades:");
students.map((student) => {
    let averageGrade = student.grades.reduce((acc, grade) => acc + grade) / student.grades.length;
    if (String(averageGrade) !== averageGrade.toFixed()) {
        averageGrade = averageGrade.toFixed(2);
    }
    let comment = "Needs Improvement";
    if (averageGrade > 95) {
        comment = "Outstanding";
    } else if (averageGrade > 85) {
        comment = "Excellent";
    } else if (averageGrade > 70) {
        comment = "Good Standing";
    }
    console.log("-", student.name + ": Average Grade =", averageGrade + ", Academic Standing", "=", comment);
})
