document.addEventListener('DOMContentLoaded', () => {
      // Dark Mode Toggle
      const toggleButton = document.getElementById('dark-mode-toggle');
      const body = document.body;

      // Load saved theme from localStorage
      if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
      }

      // Toggle dark mode on button click
      toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      });

      // GSAP Animations for Hero Section
      gsap.from('.greeting', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out'
      });
      gsap.from('.hero-title', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
      });
      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: 'power2.out'
      });
      gsap.from('.cta-buttons', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: 'power2.out'
      });
      gsap.from('.profile-image', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'elastic.out(1, 0.5)'
      });

      // Smooth Scroll for Navigation Links
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        });
      });

      // Ripple Effect for Buttons
      document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', (e) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const ripple = document.createElement('span');
          ripple.classList.add('ripple');
          ripple.style.left = `${x}px`;
          ripple.style.top = `${y}px`;
          button.appendChild(ripple);

          setTimeout(() => {
            ripple.remove();
          }, 600);
        });
      });
    });


    // submit working area 

   const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        message.style.display = "block";
        message.style.color = "green";
        message.textContent = "✅ Message sent successfully!";
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      message.style.display = "block";
      message.style.color = "red";
      message.textContent = "❌ Something went wrong. Please try again.";
    }
  });