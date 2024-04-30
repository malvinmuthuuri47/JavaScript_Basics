// nested if

let website = "Udemy";
let course_name = "JavaScript";
let code_challenge = true;

if (website === "Udemy") {
    if (course_name === "JavaScript") {
        if (code_challenge === true) {
            console.log("I want to learn JavaScript course");
        }
        else {
            console.log("I don't want to learn this course because the challenge is not present");
        }
    }
    else {
        console.log("I don't want to learn this course because its not a JavaScript Course.");
    }
} else {
    console.log("This is the wrong website. I want to learn from Udemy.");
}