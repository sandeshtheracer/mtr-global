/*document.addEventListener("DOMContentLoaded", function () {
    // 1. Header Load Karein
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            // Header load hone ke baad Mobile Toggle Functionality active karein
            initNavbarToggle();
        });

    // 2. Footer Load Karein
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });
});

// Mobile Navbar Toggle Logic
function initNavbarToggle() {
    const toggleBtn = document.querySelector('.navbar-toggle-button');
    const navRight = document.querySelector('.navbar-right');
    
    if (toggleBtn && navRight) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navRight.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!navRight.contains(e.target) && !toggleBtn.contains(e.target)) {
                navRight.classList.remove('active');
            }
        });
    }
}



// Is code ko js/layout-loader.js mein add kar sakte hain
function highlightActiveLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".navbar-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.background = "rgba(255, 255, 255, 0.2)";
            link.style.color = "#00b4d8";
        }
    });
}

*/





/* ==========================================
   DYNAMIC LAYOUT LOADER (HEADER & FOOTER)
=========================================== */

document.addEventListener("DOMContentLoaded", function () {
    // 1. Header Fetch & Inject
    fetch("components/header.html")
        .then(response => {
            if (!response.ok) throw new Error("Header load nahi ho paya");
            return response.text();
        })
        .then(data => {
            const headerContainer = document.getElementById("header-container");
            if (headerContainer) {
                headerContainer.innerHTML = data;

                // Active Navigation Link Highlight Karein
                highlightActiveLink();

                // Custom Event Dispatch Karein (header.js, translation.js aur aane wali JS files ke liye)
                document.dispatchEvent(new CustomEvent("headerLoaded"));
            }
        })
        .catch(error => console.error("Header Fetch Error:", error));

    // 2. Footer Fetch & Inject
    fetch("components/footer.html")
        .then(response => {
            if (!response.ok) throw new Error("Footer load nahi ho paya");
            return response.text();
        })
        .then(data => {
            const footerContainer = document.getElementById("footer-container");
            if (footerContainer) {
                footerContainer.innerHTML = data;

                // Custom Event Dispatch Karein (Footer load hone par)
                document.dispatchEvent(new CustomEvent("footerLoaded"));
            }
        })
        .catch(error => console.error("Footer Fetch Error:", error));
});

/* ==========================================
   ACTIVE LINK HIGHLIGHT FUNCTION
=========================================== */
function highlightActiveLink() {
    // Current URL Path se page filename nikalna
    let currentPage = window.location.pathname.split("/").pop();
    
    // Default page index.html set karein agar empty path ho
    if (!currentPage || currentPage === "") {
        currentPage = "index.html";
    }

    const navLinks = document.querySelectorAll(".navbar-link");

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        
        if (linkHref === currentPage) {
            link.classList.add("active");
            link.style.background = "rgba(255, 255, 255, 0.2)";
            link.style.color = "#00b4d8";
        }
    });
}