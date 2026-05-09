// ===== TYPING EFFECT =====
const text = "Cybersecurity Enthusiast";
let i = 0;

function typing() {
  const el = document.querySelector(".typing");

  if (!el) return;

  // reset once
  if (i === 0) el.innerHTML = "";

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 90);
  }
}

typing();


// ===== SCROLL REVEAL (PRO METHOD - CLEAN) =====
const sections = document.querySelectorAll(".section");

function revealOnScroll() {
  const triggerBottom = window.innerHeight - 100;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("active");
    }
  });
}

// run on scroll + load
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
