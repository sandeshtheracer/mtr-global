/* ==========================================
   DYNAMIC SEARCH ENGINE LOGIC
=========================================== */

// 1. Website Content Database (Sabh Pages Ka Search Data)
/*const siteDatabase = [
    {
        title: "Overseas Recruitment Services",
        url: "overseas-recruitment.html",
        category: "Services",
        description: "Connecting international employers with top talent worldwide across technical, healthcare, and engineering sectors."
    },
    {
        title: "Visa Processing & Documentation",
        url: "visa-processing.html",
        category: "Services",
        description: "Complete assistance for work permits, legal documentation, embassy attestation, and visa approvals."
    },
    {
        title: "Career Consulting & Guidance",
        url: "career-consulting.html",
        category: "Services",
        description: "Professional guidance for candidates seeking global career opportunities and skill enhancements."
    },
    {
        title: "Skill Assessment & Testing",
        url: "skill-assessment.html",
        category: "Services",
        description: "Practical trade tests, technical skill evaluation, and certification for overseas employment."
    },
    {
        title: "About MTR Global",
        url: "about.html",
        category: "Company",
        description: "Learn more about MTR Global, our mission, vision, and overseas manpower recruitment legacy."
    },
    {
        title: "Contact Us",
        url: "contact.html",
        category: "Support",
        description: "Get in touch with our expert team for hiring manpower or career consultation inquiries."
    },
    {
        title: "Privacy Policy",
        url: "privacy-policy.html",
        category: "Legal",
        description: "Privacy policy and data security standards practiced at MTR Global recruitment."
    }
];

// 2. Main Search Execution
document.addEventListener("DOMContentLoaded", () => {
    // Extract query parameter from URL (?search=keyword)
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');

    const queryTextElement = document.getElementById('search-query-text');
    const resultsContainer = document.getElementById('results-container');

    if (!searchQuery || searchQuery.trim() === "") {
        queryTextElement.textContent = `""`;
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h2>Please enter a keyword to search.</h2>
            </div>`;
        return;
    }

    const query = searchQuery.trim().toLowerCase();
    queryTextElement.textContent = `"${searchQuery}"`;

    // Filter database based on keyword match
    const matchedResults = siteDatabase.filter(item => {
        return item.title.toLowerCase().includes(query) || 
               item.description.toLowerCase().includes(query) ||
               item.category.toLowerCase().includes(query);
    });

    // Render results
    if (matchedResults.length > 0) {
        resultsContainer.innerHTML = matchedResults.map(item => `
            <div class="result-card">
                <h3><a href="${item.url}">${item.title}</a></h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    } else {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search-minus"></i>
                <h2>No matching results found for "${searchQuery}"</h2>
                <p>Try searching with different keywords like 'visa', 'recruitment', 'career', or 'about'.</p>
            </div>`;
    }
});





/* ==========================================
   LIVE REAL-TIME SEARCH ENGINE
=========================================== */

const siteDatabase = [
    {
        title: "Overseas Recruitment Services",
        url: "overseas-recruitment.html",
        category: "Services",
        description: "Connecting international employers with top talent worldwide across technical, healthcare, and engineering sectors."
    },
    {
        title: "Visa Processing & Documentation",
        url: "visa-processing.html",
        category: "Services",
        description: "Complete assistance for work permits, legal documentation, embassy attestation, and visa approvals."
    },
    {
        title: "Career Consulting & Guidance",
        url: "career-consulting.html",
        category: "Services",
        description: "Professional guidance for candidates seeking global career opportunities and skill enhancements."
    },
    {
        title: "Skill Assessment & Testing",
        url: "skill-assessment.html",
        category: "Services",
        description: "Practical trade tests, technical skill evaluation, and certification for overseas employment."
    },
    {
        title: "About MTR Global",
        url: "about.html",
        category: "Company",
        description: "Learn more about MTR Global, our mission, vision, and overseas manpower recruitment legacy."
    },
    {
        title: "Contact Us",
        url: "contact.html",
        category: "Support",
        description: "Get in touch with our expert team for hiring manpower or career consultation inquiries."
    }
];

function performLiveSearch(query) {
    const resultsContainer = document.getElementById('results-container');
    const queryTextElement = document.getElementById('search-query-text');

    if (queryTextElement) {
        queryTextElement.textContent = query ? `"${query}"` : `""`;
    }

    if (!query || query.trim() === "") {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h2>Please enter a keyword to search.</h2>
            </div>`;
        return;
    }

    const cleanQuery = query.trim().toLowerCase();

    // Matching logic
    const matchedResults = siteDatabase.filter(item => {
        return item.title.toLowerCase().includes(cleanQuery) || 
               item.description.toLowerCase().includes(cleanQuery) ||
               item.category.toLowerCase().includes(cleanQuery);
    });

    // Render Live Results
    if (matchedResults.length > 0) {
        resultsContainer.innerHTML = matchedResults.map(item => `
            <div class="result-card">
                <h3><a href="${item.url}">${item.title}</a></h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    } else {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search-minus"></i>
                <h2>No matching results found for "${query}"</h2>
                <p>Try searching with different keywords like 'visa', 'recruitment', 'career', or 'about'.</p>
            </div>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // URL parameter check (?search=keyword)
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('search') || "";

    const liveSearchInput = document.getElementById('live-search-input');
    if (liveSearchInput) {
        liveSearchInput.value = initialQuery;
        
        // Input keypress par INSTANT LIVE SEARCH
        liveSearchInput.addEventListener('input', (e) => {
            performLiveSearch(e.target.value);
        });
    }

    performLiveSearch(initialQuery);
});