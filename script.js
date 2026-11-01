
// Internship data
const internships = [
    {
        title: "Frontend Developer Intern",
        company: "Tech Solutions",
        domain: "Web Development",
        location: "Chennai",
        duration: "3 Months",
        stipend: "₹8,000/month"
    },
    {
        title: "Python Developer Intern",
        company: "Code Academy",
        domain: "Python",
        location: "Bangalore",
        duration: "2 Months",
        stipend: "₹10,000/month"
    },
    {
        title: "Data Science Intern",
        company: "Data World",
        domain: "Data Science",
        location: "Remote",
        duration: "6 Months",
        stipend: "₹12,000/month"
    },
    {
        title: "Java Developer Intern",
        company: "Soft Tech",
        domain: "Java",
        location: "Chennai",
        duration: "3 Months",
        stipend: "₹7,000/month"
    },
    {
        title: "Web Design Intern",
        company: "Creative Studio",
        domain: "Web Development",
        location: "Remote",
        duration: "2 Months",
        stipend: "₹5,000/month"
    },
    {
        title: "Python Automation Intern",
        company: "Digital Works",
        domain: "Python",
        location: "Coimbatore",
        duration: "3 Months",
        stipend: "₹9,000/month"
    }
];

// Get the internship container
const internshipList = document.getElementById("internshipList");

// Display internship cards
function displayInternships(data) {

    internshipList.innerHTML = "";

    data.forEach(function(internship) {

        const card = document.createElement("div");

        card.className = "internship-card";

        const title = document.createElement("h3");
        title.textContent = internship.title;

        const company = document.createElement("p");
        company.textContent = "Company: " + internship.company;

        const domain = document.createElement("p");
        domain.textContent = "Domain: " + internship.domain;

        const location = document.createElement("p");
        location.textContent = "Location: " + internship.location;

        const duration = document.createElement("p");
        duration.textContent = "Duration: " + internship.duration;

        const stipend = document.createElement("p");
        stipend.textContent = "Stipend: " + internship.stipend;

        const button = document.createElement("button");
        button.textContent = "Apply Now";

        button.addEventListener("click", function() {
            alert("You selected: " + internship.title);
        });

        card.appendChild(title);
        card.appendChild(company);
        card.appendChild(domain);
        card.appendChild(location);
        card.appendChild(duration);
        card.appendChild(stipend);
        card.appendChild(button);

        internshipList.appendChild(card);

    });

    // Show empty message if no internships exist
    const emptyMessage = document.getElementById("emptyMessage");

    emptyMessage.hidden = data.length !== 0;
}

// Display all internships initially
displayInternships(internships);

// Get search and filter elements
const searchInput = document.getElementById("searchInput");

const domainFilter = document.getElementById("domainFilter");

// Function to search and filter internships
function filterInternships() {

    const searchText = searchInput.value.toLowerCase();

    const selectedDomain = domainFilter.value;

    const filteredData = internships.filter(function(internship) {

        const matchesSearch =
            internship.title.toLowerCase().includes(searchText) ||
            internship.company.toLowerCase().includes(searchText);

        const matchesDomain =
            selectedDomain === "all" ||
            internship.domain === selectedDomain;

        return matchesSearch && matchesDomain;

    });

    displayInternships(filteredData);
}

// Search when user types
searchInput.addEventListener("input", filterInternships);

// Filter when user selects a domain
domainFilter.addEventListener("change", filterInternships);
