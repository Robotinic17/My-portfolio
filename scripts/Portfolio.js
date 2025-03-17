const messages = [
    "I'm a frontend developer",
    "I create interactive UIs",
    "I build responsive web designs",
    "I develop with HTML, CSS, and JavaScript",
    "I optimize websites for performance",
    "I ensure cross-browser compatibility",
    "I implement animations and transitions",
    "I integrate APIs into web applications",
    "I collaborate with designers & backend devs",
    "I enhance user experience (UX)",
    "I write clean and maintainable code"
];

let currentIndex = 0;
const textElement = document.getElementById('dynamic');

function updateText() {
    textElement.style.opacity = 0; // Start fade out
    setTimeout(() => {
        textElement.textContent = messages[currentIndex];
        textElement.style.opacity = 1; // Fade in
        currentIndex = (currentIndex + 1) % messages.length;
    }, 500); // Wait for fade-out to complete before changing text
}

// Initial call to display the first message
updateText();

// Update the text every 3 seconds
setInterval(updateText, 3000);


const targetDiv = document.getElementById("sec_div"); // The div that triggers theme change

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.1) {
                document.body.classList.add("sec_theme"); // Activate dark mode
            } else {
                document.body.classList.remove("sec_theme"); // Return to light mode
            }
        });
    },
    { threshold: 0.1 } // When 30% of targetDiv is visible
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
            if (entry.intersectionRatio >= 0.2) {
                document.body.classList.add("thi_theme"); // Activate dark mode
            } else {
                document.body.classList.remove("thi_theme"); // Return to light mode
            }
        });
    },
    { threshold: 0.2 } // When 30% of targetDiv is visible
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
  document.getElementById("overlay").style.display = "none"
}