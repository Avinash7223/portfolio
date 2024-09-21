document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("div[id]");
    
    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add("fade-in");
        observer.observe(section);
    });
});



function openPopup() {
    document.getElementById("pdfModal").style.display = "block";
}

function closePopup() {
    document.getElementById("pdfModal").style.display = "none";
}
