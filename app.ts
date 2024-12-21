document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value.trim();
        const email = (document.getElementById('email') as HTMLInputElement).value.trim();
        const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
        const education = (document.getElementById('education') as HTMLTextAreaElement).value.trim();
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.trim();
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.trim();

        const resumeHTML = `
            <h2>Editable Resume</h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
            <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
            <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>

            <h3>Education</h3>
            <p contenteditable="true">${education}</p>

            <h3>Experience</h3>
            <p contenteditable="true">${experience}</p>

            <h3>Skills</h3>
            <p contenteditable="true">${skills}</p>
        `;

        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
            alert("Resume generated successfully!");
        } else {
            console.error("Resume display element is missing.");
        }
    });
});


