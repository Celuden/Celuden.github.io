document.addEventListener("DOMContentLoaded", () => {
  // Create stars for background
  function createStars() {
    const starsContainer = document.getElementById("stars-container")
    const starCount = 200

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      const size = Math.random() * 2

      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.position = "absolute"
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.background = i % 20 === 0 ? "#ff3a3a" : "#fff"
      star.style.borderRadius = "50%"
      star.style.opacity = Math.random()
      star.style.boxShadow = i % 20 === 0 ? "0 0 10px #ff3a3a" : "none"

      // Add twinkling animation with random delay
      star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`

      starsContainer.appendChild(star)
    }

    // Add CSS for twinkling animation
    const style = document.createElement("style")
    style.textContent = `
      @keyframes twinkle {
        0% { opacity: 0.2; }
        50% { opacity: 1; }
        100% { opacity: 0.2; }
      }
    `
    document.head.appendChild(style)
  }

  createStars()

  // Parallax effect for stars
  window.addEventListener("mousemove", (e) => {
    const stars = document.querySelectorAll("#stars-container div")
    const mouseX = e.clientX / window.innerWidth
    const mouseY = e.clientY / window.innerHeight

    stars.forEach((star, index) => {
      if (index % 10 === 0) {
        // Only apply to some stars for performance
        const depth = Math.random() * 0.5
        const moveX = (mouseX - 0.5) * depth * 20
        const moveY = (mouseY - 0.5) * depth * 20

        star.style.transform = `translate(${moveX}px, ${moveY}px)`
      }
    })
  })

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      hamburger.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a nav link
  const navItems = document.querySelectorAll(".nav-links a")

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
        hamburger.classList.remove("active")
      }
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Form submission handling
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // In a real implementation, you would send the form data to a server
      // For GitHub Pages, you might use a service like Formspree

      const formData = new FormData(contactForm)
      const formValues = Object.fromEntries(formData.entries())

      console.log("Form submitted:", formValues)

      // Show success message
      alert("Thank you for your message! I will get back to you soon.")

      // Reset form
      contactForm.reset()
    })
  }

  // Add active class to nav links on scroll
  const sections = document.querySelectorAll("section")

  function highlightNavOnScroll() {
    const scrollPosition = window.scrollY

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.add("active")
      } else {
        document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.remove("active")
      }
    })
  }

  window.addEventListener("scroll", highlightNavOnScroll)

  // Add scroll animation for elements
  function revealOnScroll() {
    const elements = document.querySelectorAll(".project-card, .skill-category, .tool-item")
    const windowHeight = window.innerHeight

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < windowHeight - 100) {
        element.classList.add("visible")
      }
    })
  }

  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll() // Initial check
})

