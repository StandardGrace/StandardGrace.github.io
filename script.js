// Highlight the nav link for the section currently in view.
// Vanilla IntersectionObserver - no libraries, no build step.

const sections = document.querySelectorAll("main .section, .hero");
const navLinks = document.querySelectorAll(".nav-links a");

const linkFor = (id) =>
  document.querySelector(`.nav-links a[href="#${id}"]`);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.remove("active"));
      const link = linkFor(entry.target.id);
      if (link) link.classList.add("active");
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observer.observe(section));
