// Image Slider
document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".slider-container")
  const sliderImages = document.querySelectorAll(".slider-image")
  const prevBtn = document.querySelector(".slider-btn.prev")
  const nextBtn = document.querySelector(".slider-btn.next")
  let currentSlide = 0

  if (sliderContainer && sliderImages.length > 0) {
    function showSlide(index) {
      sliderContainer.style.transform = `translateX(-${index * 100}%)`
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % sliderImages.length
      showSlide(currentSlide)
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length
      showSlide(currentSlide)
    }

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", prevSlide)
      nextBtn.addEventListener("click", nextSlide)
    }

    // Initialize slider
    showSlide(currentSlide)

    // Automatic slide change
    //setInterval(nextSlide, 5000)
  }

  // Project Navigation
  const prevProjectBtn = document.querySelector(".prev-project")
  const nextProjectBtn = document.querySelector(".next-project")

  // Project Pages
  const projectPages = [
    "MarosMayhem.html",
    "KnockOffHeroes.html",
    "FlameNFizzle.html",
    "ProjectSisyphos.html",
    "RealmOfUnrest.html",
    "ChessBot.html",
    "Portfolio.html",
    "UnrealNiagaraVFX.html",
    "UnrealEnvironments.html",
    "Houdini.html",
    "PBR.html",
  ]

  function getCurrentProjectIndex() {
    const currentPage = window.location.pathname.split("/").pop()
    return projectPages.indexOf(currentPage)
  }

  function updateProjectNavigation() {
    const currentIndex = getCurrentProjectIndex()

    if (prevProjectBtn) {
      prevProjectBtn.href = projectPages[(currentIndex - 1 + projectPages.length) % projectPages.length]
    }

    if (nextProjectBtn) {
      nextProjectBtn.href = projectPages[(currentIndex + 1) % projectPages.length]
    }
  }

  updateProjectNavigation()

  // Burger menu functionality
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  // Toggle menu when clicking on hamburger
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Close menu when clicking on a navigation link
  const navLinksItems = document.querySelectorAll(".nav-links a")
  navLinksItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
})

