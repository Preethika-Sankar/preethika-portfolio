document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  // Intersection Observer for fade-in effect
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach(section => {
    observer.observe(section);
  });
});