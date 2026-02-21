const topBtn = document.getElementById("topBtn");
window.onscroll = function() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
topBtn.style.display = "flex";
            } 
 else {
topBtn.style.display = "none";
}
};

topBtn.onclick = function(e) {
e.preventDefault();
window.scrollTo({top: 0, behavior: 'smooth'});
};

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
nav.classList.add("scrolled");
}
 else {
nav.classList.remove("scrolled");
        }
    });

const sections = document.querySelectorAll("#home, #about, #projects, #skills, #contact");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
let current = "";
sections.forEach(section => {
const sectionTop = section.offsetTop - 120;
const sectionHeight = section.offsetHeight;

if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
current = section.getAttribute("id");
}
        });

navLinks.forEach(link => {
link.classList.remove("active");
if (link.getAttribute("href") === `#${current}`) {
link.classList.add("active");
        }
    });
});

console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", function () {
const nameElement = document.getElementById("typing-name");
if (!nameElement) {
console.error("typing-name element not found");
return;
}

const text = "Muhammad Umer";
let index = 0;

function typeName() {
if (index < text.length) {
nameElement.textContent += text.charAt(index);
index++;
setTimeout(typeName, 120);
}
}

typeName();

});


document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();
const success = document.querySelector(".form-success");
const error = document.querySelector(".form-error");

const nameRegex = /^(?=.*[aeiouAEIOU])[A-Za-z]+(?:\s[A-Za-z]+)+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

error.style.display = "none";
success.classList.remove("show");

if (!nameRegex.test(name)) {
    showError("Enter a full name)");
    return;
    }

if (!emailRegex.test(email)) {
    showError("Enter a valid email address");
    return;
    }

if (message.length < 50 || message.length > 100) {
    showError("Message must be between 50 and 100 characters");
    return;
}

if (!/[a-zA-Z]/.test(message)) {
    showError("Message must contain meaningful text");
    return;
}

if (!/[aeiouAEIOU]/.test(message)) {
    showError("Message looks invalid. Please write a meaningful message.");
    return;
}

if (/^(.)\1+$/.test(message.replace(/\s/g, ""))) {
    showError("Message cannot contain repeated characters only");
    return;
}

function showSuccess() {
success.textContent = "Message sent successfully!";
success.classList.add("show");
error.style.display = "none";

setTimeout(() => {
success.classList.remove("show");
}, 3000);
}

showSuccess();
this.reset();

function showError(msg) {
error.textContent = msg;
error.style.display = "block";
    }
});