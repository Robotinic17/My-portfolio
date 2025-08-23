const messages = [
    "I'm a frontend developer.",
    "I create interactive UIs.",
    "I build responsive web designs.",
    "I develop with HTML, CSS, and JavaScript.",
    "I optimize websites for performance.",
    "I ensure cross-browser compatibility.",
    "I implement animations and transitions.",
    "I integrate APIs into web applications.",
    "I collaborate with designers & backend devs.",
    "I enhance user experience (UX).",
    "I write clean and maintainable code."
];

let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById('dynamic');

const typingSpeed = 150;    // Speed when typing
const deletingSpeed = 100;   // Speed when deleting
const delayBetweenWords = 2000; // Delay after full word typed

function typeWriter() {
  const currentText = messages[currentIndex];

  if (isDeleting) {
    textElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % messages.length;
    }
    setTimeout(typeWriter, deletingSpeed);

  } else {
    textElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeWriter, delayBetweenWords); // Wait before deleting
    } else {
      setTimeout(typeWriter, typingSpeed);
    }
  }
}

// Start the typing
typeWriter();


const targetDiv = document.getElementById("sec_div"); // The div that triggers theme change

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.15) {
                document.body.classList.add("sec_theme"); // Activate dark mode
            } else {
                document.body.classList.remove("sec_theme"); // Return to light mode
            }
        });
    },
    { threshold: 0.15 } // When 30% of targetDiv is visible
);

observer.observe(sec_div);

window.addEventListener("scroll", function(){
    const header = this.document.getElementById("header");

    if( this.window.scrollY > 100) {
        header.classList.add('blur');
    } else{
        header.classList.remove('blur')
    }
})

const thirdDiv = document.getElementById("experience"); // The div that triggers theme change

const looker = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.3) {
                document.body.classList.add("thi_theme"); // Activate dark mode
            } else {
                document.body.classList.remove("thi_theme"); // Return to light mode
            }
        });
    },
    { threshold: 0.3 } // When 30% of targetDiv is visible
);

looker.observe(experience);


const fourthDiv = document.getElementById("thi_div"); // The div that triggers theme change

const watcher = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.1) {
                document.body.classList.add("for_theme"); // Activate dark mode
            } else {
                document.body.classList.remove("for_theme"); // Return to light mode
            }
        });
    },
    { threshold: 0.1 } // When 30% of targetDiv is visible
);

watcher.observe(thi_div);

const reveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else{
        entry.target.classList.remove('show');
      }
    });
  });
  
  document.querySelectorAll('.child1 div').forEach(el => reveal.observe(el));
  document.querySelectorAll('.experience p').forEach(el => reveal.observe(el));
  document.querySelectorAll('.thi_div').forEach(el => reveal.observe(el));
  

  
const nav = document.getElementById("menu");
nav.addEventListener("click", toggleNav);

function toggleNav() {
    const sideNav = document.getElementById("side-menu");
   // Show the element
    sideNav.style.right = "0"
    document.getElementById("overlay").style.display = "block"
  }

const navcancel = document.getElementById("Xmenu");
navcancel.addEventListener("click", navcan);

function navcan() {
  document.getElementById("side-menu").style.right = "-100%";
  document.getElementById("overlay").style.display = "none";
}

const bodyWatch = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else{
        entry.target.classList.remove('visible');
      }
    });
  });
  
  document.querySelectorAll(".body").forEach(el => bodyWatch.observe(el));
  
  const revealExp = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('clear_exp');
      } else{
        entry.target.classList.remove('clear_exp');
      }
    });
  });
  
  document.querySelectorAll('.experience').forEach(el => revealExp.observe(el));
  document.querySelectorAll(".skills").forEach(el => revealExp.observe(el));


  AOS.init({
    mirror: true
  });