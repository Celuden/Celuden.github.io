// Image Slider
document.addEventListener('DOMContentLoaded', function() {
  const sliderContainer = document.querySelector(".slider-container")
  const sliderImages = document.querySelectorAll(".slider-image")
  const prevBtn = document.querySelector(".slider-btn.prev")
  const nextBtn = document.querySelector(".slider-btn.next")
  let currentSlide = 0

  // Only initialize slider if elements exist
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

    // Initialize the slider
    showSlide(currentSlide)

    // Automatic slide change
    //setInterval(nextSlide, 5000)
  }

  // Rest of your existing script.js code...
  // Project Navigation
  const prevProjectBtn = document.querySelector(".prev-project")
  const nextProjectBtn = document.querySelector(".next-project")

  // You'll need to replace these with your actual project pages
  const projectPages = ["MarosMayhem.html", "KnockOffHeroes.html", "ProjectSisyphos.html", "RealmOfUnrest.html", "FlameNFizzle.html", "ChessBot.html"]

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