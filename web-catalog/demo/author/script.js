const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(
  [
    ".author-photo",
    ".author-copy",
    ".book-stage",
    ".hero-copy",
    ".book-parts article",
    ".book-inside-heading",
    ".chapter-grid article",
    ".section-heading",
    ".product-card",
    ".decision-card",
    ".faq-list details",
    ".final-inner",
  ].join(",")
);

if (revealItems.length) {
  revealItems.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 55, 220)}ms`);
  });

  [".book-parts", ".chapter-grid", ".support-grid", ".decision-grid", ".faq-list"].forEach((selector) => {
    const group = document.querySelector(selector);
    if (!group) return;

    group.querySelectorAll(".reveal").forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
    });
  });

  const finishReveal = (item) => {
    window.setTimeout(() => {
      item.classList.remove("reveal", "is-visible");
      item.style.removeProperty("--reveal-delay");
    }, 900);
  };

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => {
      item.classList.add("is-revealed");
      item.classList.remove("reveal", "is-visible");
      item.style.removeProperty("--reveal-delay");
    });
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible", "is-revealed");
            finishReveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  }
}

const bookStage = document.querySelector(".book-stage");
const book = document.querySelector(".book");
const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

if (bookStage && book && hasFinePointer && !reduceMotion) {
  let tiltFrame = 0;

  bookStage.addEventListener("mousemove", (event) => {
    window.cancelAnimationFrame(tiltFrame);
    tiltFrame = window.requestAnimationFrame(() => {
      const rect = bookStage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * 4.2;
      const rotateY = -15 + (x - 0.5) * 7.5;

      book.style.setProperty("--book-tilt-x", `${rotateX.toFixed(2)}deg`);
      book.style.setProperty("--book-tilt-y", `${rotateY.toFixed(2)}deg`);
      book.style.setProperty("--book-lift", "-5px");
    });
  });

  bookStage.addEventListener("mouseleave", () => {
    window.cancelAnimationFrame(tiltFrame);
    book.style.removeProperty("--book-tilt-x");
    book.style.removeProperty("--book-tilt-y");
    book.style.removeProperty("--book-lift");
  });
}
