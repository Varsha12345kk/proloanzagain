console.log("JS file loaded");

window.addEventListener("load", () => {
  const progressBar = document.querySelector(".progress span");
  if (!progressBar) return console.error("Progress bar not found!");
  console.log("Animating progress bar");
  progressBar.style.width = "0%";
  setTimeout(() => {
    progressBar.style.transition = "width 2s ease-in-out";
    progressBar.style.width = "100%";
  }, 500);
});




const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
const navLinks = document.querySelectorAll('.nav-links a:not(.dropdown-toggle)');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});




function generateCaptcha() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const captchaLength = 6;
  const captchaBox = document.getElementById('captcha');
  if (!captchaBox) return "";

  captchaBox.innerHTML = ''; 
  let captcha = '';
  for (let i = 0; i < captchaLength; i++) {
    const char = chars.charAt(Math.floor(Math.random() * chars.length));
    captcha += char;
    const span = document.createElement('span');
    span.innerText = char;
    const rotate = Math.floor(Math.random() * 50) - 25;
    const translateY = Math.floor(Math.random() * 11) - 5;
    const color = `rgb(${Math.floor(Math.random()*100)},${Math.floor(Math.random()*100)},${Math.floor(Math.random()*255)})`;
    span.style.transform = `rotate(${rotate}deg) translateY(${translateY}px)`;
    span.style.color = color;
    span.style.fontSize = `${1.2 + Math.random()*0.4}rem`;
    captchaBox.appendChild(span);
  }
  return captcha;
}
let currentCaptcha = generateCaptcha();
const refreshBtn = document.getElementById('refreshCaptcha');
if (refreshBtn) {
  refreshBtn.onclick = () => {
    currentCaptcha = generateCaptcha();
  };
}
function verifyCaptcha() {
  const input = document.getElementById('captchaInput');
  if (!input) return false;
  const userInput = input.value.trim();
  if (userInput === currentCaptcha) {
    alert("Captcha Verified!");
    input.value = '';
    currentCaptcha = generateCaptcha();
    return true;
  } else {
    alert("Wrong Captcha, try again.");
    input.value = '';
    currentCaptcha = generateCaptcha();
    return false;
  }
}



document.addEventListener('DOMContentLoaded', () => {
  const btnLeft = document.getElementById('btnLeft');
  const btnRight = document.getElementById('btnRight');
  const servicesWrapper = document.getElementById('servicesWrapper');
  if (!btnLeft || !btnRight || !servicesWrapper) return;

  const card = servicesWrapper.querySelector('.service-card');
  if (!card) return;

  const style = window.getComputedStyle(servicesWrapper);
  const gap = parseFloat(style.columnGap) || 0; 
  const scrollAmount = card.offsetWidth + gap;

  btnLeft.addEventListener('click', () => {
    servicesWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  btnRight.addEventListener('click', () => {
    servicesWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-btn, .cta-btn1');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.classList.remove('hover-out');
      this.classList.add('hover-in');
    });
    
    button.addEventListener('mouseleave', function() {
      this.classList.remove('hover-in');
      this.classList.add('hover-out');
    });
  });
});



window.addEventListener('DOMContentLoaded', function() {
  const stepsSection = document.querySelector('.steps-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAnimation();
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.4 
  });
  observer.observe(stepsSection);
  function startAnimation() {
    const stepItems = document.querySelectorAll('.step-item');
    const lines = document.querySelectorAll('.line');
    const outerCircleDelay = 600;
    const innerCircleDelay = 1500;
    const lineDelay = 800;
    const nextStepDelay = 600;
    let currentDelay = 500; 
    stepItems.forEach((stepItem, index) => {
      const innerCircle = stepItem.querySelector('.circle-inner');
      const outerCircle = stepItem.querySelector('.circle-outer');
      // Fill outer circle first
      setTimeout(() => {
        outerCircle.classList.add('fill-outer');
      }, currentDelay);
      currentDelay += outerCircleDelay;
      setTimeout(() => {
        innerCircle.classList.add('fill-inner');
      }, currentDelay);
      currentDelay += innerCircleDelay;
      if (index < lines.length) {
        setTimeout(() => {
          lines[index].classList.add('fill-line');
        }, currentDelay);
        currentDelay += lineDelay;
      }
      currentDelay += nextStepDelay;
    });
  }
});



  document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownToggle.addEventListener("click", function(e) {
      e.preventDefault(); 
      dropdownMenu.classList.toggle("show"); 
    });
    document.addEventListener("click", function(e) {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("show");
      }
    });
  });



  document.querySelector('.dropdown-toggle').addEventListener('click', function (e) {
  e.preventDefault();

  // Toggle only the mobile dropdown
  document.querySelector('.mobile-dropdown').classList.toggle('show');
});