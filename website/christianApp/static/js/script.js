document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    const revealOnScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight;
        
        sections.forEach(section => {
            if (section.offsetTop < scrollPos - 100) {
                section.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Reveal sections on page load
});
