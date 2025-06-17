document.addEventListener('DOMContentLoaded', function () {
  fetch('resume.json')
    .then(response => response.json())
    .then(data => {
      const app = document.getElementById('app');
      app.innerHTML = `
                <header>
                    <h1>${data.name}</h1>
                    <div id="contact" style="text-align:center;">
                        <p>
                            ${data.contact.location} | 
                            <a href="tel:${data.contact.phone}">${data.contact.phone}</a> | 
                            <a href="mailto:${data.contact.email}">${data.contact.email}</a> | 
                            <a href="https://${data.contact.linkedin}" target="_blank">${data.contact.linkedin}</a>
                        </p>
                    </div>
                </header>

                <section id="summary">
                    <h2>Summary</h2>
                    <p>${data.summary}</p>
                </section>

                <section id="skills">
                    <h2>Skills</h2>
                    ${Object.keys(data.skills).map(key => `
                        <p><strong>${key}:</strong> ${data.skills[key].join(', ')}</p>
                    `).join('')}
                </section>

                <section id="experience">
                    <h2>Work Experience</h2>
                    ${data.experience.map(job => `
                        <div class="job">
                            <h3>${job.title}</h3>
                            <h4>${job.company} | ${job.location} | ${job.period}</h4>
                            <ul>
                                ${job.responsibilities.map(res => `<li>${res}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </section>

                <section id="education">
                    <h2>Education</h2>
                    ${data.education.map(edu => `
                        <p><strong>${edu.degree}</strong> - ${edu.institution}</p>
                    `).join('')}
                </section>

                <section id="languages">
                    <h2>Languages</h2>
                     ${data.languages.map(lang => `
                        <p><strong>${lang.language}:</strong> ${lang.proficiency}</p>
                     `).join('')}
                </section>
            `;
    });
});