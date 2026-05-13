function toggleMenu() {
    const overlay = document.getElementById("menuOverlay");
    const menu = document.getElementById("centerMenu");

    const isOpen = overlay.style.display === "block";

    if (isOpen) {
        closeMenu();
    } else {
        overlay.style.display = "block";
        menu.style.display = "block";

        // Restart animation
        menu.style.animation = "none";
        void menu.offsetWidth; 
        menu.style.animation = "fadeInMenu 0.35s ease-out";
    }
}

function closeMenu() {
    document.getElementById("menuOverlay").style.display = "none";
    document.getElementById("centerMenu").style.display = "none";
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// First-time popup
window.onload = function() {
    if (!localStorage.getItem("visitedBefore")) {
        document.getElementById("welcomeOverlay").style.display = "block";
        document.getElementById("welcomePopup").style.display = "block";
        localStorage.setItem("visitedBefore", "true");
    }
};

function closeWelcome() {
    document.getElementById("welcomeOverlay").style.display = "none";
    document.getElementById("welcomePopup").style.display = "none";
}

console.log("Caleb's music site is running!");
