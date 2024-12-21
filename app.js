document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('resume-form');
    var resumeDisplayElement = document.getElementById('resume-display');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var education = document.getElementById('education').value.trim();
        var experience = document.getElementById('experience').value.trim();
        var skills = document.getElementById('skills').value.trim();
        var resumeHTML = "\n            <h2>Editable Resume</h2>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n            <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n            <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
            alert("Resume generated successfully!");
        }
        else {
            console.error("Resume display element is missing.");
        }
    });
});

