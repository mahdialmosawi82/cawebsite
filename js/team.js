const teamMembers = {
    founders: [
        {
            name: "Liz Dailey",
            role: "Co-Founder & Executive Director",
            description: "Liz is a social worker and educator who is delighted to serve as CreateAccess’ Executive Director.",
            img: "team/1.png"
        },
        {
            name: "Patrick Cozzi",
            role: "Co-Founder",
            description: "Patrick is a 3D graphics geek, entrepreneur, and educator.",
            img: "team/2.png"
        }
    ],

    educatorsTechnologists: [
        {
            name: "Uzoma James Chikwem",
            role: "Technical education consultant",
            description: "James is a passionate educator of graphics and game technology, and hopes to help others learn about the transformative power of gaming to shape a better and sustainable future.",
            img: "team/3.png"
        },
        {
            name: "Victor Scott Cushman",
            role: "Volunteer",
            description: "Victor (Scott) Cushman is a professional software engineer, amateur game developer, and loving cat dad.",
            img: "team/4.png"
        },
        {
            name: "John Dailey",
            role: "Technical Consultant",
            description: "John is a retired hardware/embedded firmware engineer.",
            img: "team/5.png"
        },
        {
            name: "Lou Osinski",
            role: "Education Consultant",
            description: "Lou Osinski is a versatile entrepreneur and innovator with three decades of experience in education.",
            img: "team/6.png"
        },
        {
            name: "Kevin Quinn",
            role: "Education Consultant",
            description: "Kevin serves as the Lead of Curriculum at Malvern Preparatory School where he has taught for sixteen years.",
            img: "team/7.png"
        }
    ],

    interns: [
        {
            name: "Josh DeStefano",
            role: "3D Program Developer",
            description: "Josh is a senior at Malvern Preparatory School. His initial interest in 3D stemmed from playing video games and creating stop-motion films as a kid because he wanted a way to combine the two mediums to tell his own stories.",
            img: "team/8.png"
        },
        {
            name: "Nicky Jushchyshyn",
            role: "Technical 3D Content Creator",
            description: "Nicky is a student at Drexel University studying for a bachelor's degree in animation and visual effects as well as a master's in digital media.",
            img: "team/9.png"
        },
        {
            name: "AJ Marinelli",
            role: "Technical 3D Content Creator",
            description: "AJ served on the department’s student web development team, and created and maintained websites used by the College of Science and Mathematics.",
            img: "team/10.png"
        },
        {
            name: "Panote Nuchprayoon",
            role: "Technical 3D Content Creator",
            description: "Panote is a creative tech multidisciplinarian. Their work touches on education, visual design, game development, user experience, and accessibility.",
            img: "team/11.png"
        },
        {
            name: "Lara Rende",
            role: "3D Content Creator",
            description: "Lara is a 3D artist who focuses on the integration of 3D technology in live events and production.",
            img: "team/12.png"
        }
    ]
};



// Function to display a team section
function displayTeam(sectionId, members) {
    const container = document.querySelector(`#${sectionId} .team-container`);

    members.forEach(member => {
        const card = document.createElement("div");
        card.className = "team-card";

        card.innerHTML = `
            <img src="${member.img}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p><strong>${member.role}</strong></p>
            <p>${member.description}</p>
        `;

        container.appendChild(card);
    });
}

// Display each section
document.addEventListener("DOMContentLoaded", () => {
    displayTeam("founders", teamMembers.founders);
    displayTeam("educators-technologists", teamMembers.educatorsTechnologists);
    displayTeam("interns", teamMembers.interns);
});
