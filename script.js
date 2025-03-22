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
    "TheDarkPlace.html",
    "TheStoryOfSoll.html",
    "Knastbruch.html",
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

// Filtering
document.addEventListener("DOMContentLoaded", () => {

  // Get all project cards
  const projectCards = document.querySelectorAll('.project-card');

  const oldProjects = [
    "The Dark Place",
    "The Story of Söll",
    "Knastbruch"
  ]

  // Available tags
  const allowedFilterTags = [
    "Game", "Programming", "Art",
    "Unity", "Unreal Engine", "C#", "C++",
    "2D", "3D", "GameJam"
  ];

  // Older Projects
  projectCards.forEach(card => {
    const title = card.querySelector('.project-overlay h3')?.textContent.trim();
    if (oldProjects.includes(title)) {
      card.classList.add('older-project');
    }
  });

  // Initially hide older projects
  const olderProjects = document.querySelectorAll('.older-project');
  olderProjects.forEach(project => {
    project.style.display = 'none';
  });

  // Extract all unique tags from allowed list that exist in projects
  const allTags = new Set();
  projectCards.forEach(card => {
    const tagElements = card.querySelectorAll('.project-tag');
    tagElements.forEach(tag => {
      const tagText = tag.textContent.trim();
      if (allowedFilterTags.includes(tagText)) {
        allTags.add(tagText);
      }
    });
  });

  // Create filter container
  const projectsSection = document.querySelector('#projects .container');
  const filterContainer = document.createElement('div');
  filterContainer.className = 'filter-container';

  // Create filter toggle button
  const filterToggle = document.createElement('button');
  filterToggle.className = 'filter-toggle btn secondary';
  filterToggle.innerHTML = '<i class="fas fa-filter"></i> Filter Projects';

  // Create filter tags container
  const filterTags = document.createElement('div');
  filterTags.className = 'filter-tags';
  filterTags.style.display = 'none';

  // Create clear filters button
  const clearFilters = document.createElement('button');
  clearFilters.className = 'clear-filters';
  clearFilters.innerHTML = 'Clear Filters <i class="fas fa-times"></i>';
  clearFilters.style.display = 'none';

  // Create older projects container (for button and counter)
  const olderProjectsContainer = document.createElement('div');
  olderProjectsContainer.className = 'older-projects-container';

  // Create show older projects button
  const showOlderBtn = document.createElement('button');
  showOlderBtn.className = 'show-older-btn btn secondary';
  showOlderBtn.innerHTML = '<i class="fas fa-archive"></i> Show Older Projects';

  // Create hidden projects counter
  const hiddenCounter = document.createElement('span');
  hiddenCounter.className = 'hidden-counter';
  hiddenCounter.textContent = `(${olderProjects.length} hidden)`;

  // Create no hidden projects message
  const noHiddenMsg = document.createElement('span');
  noHiddenMsg.className = 'no-hidden-msg';
  noHiddenMsg.textContent = 'No hidden projects match current filters';
  noHiddenMsg.style.display = 'none';

  // Add button and counter to container
  olderProjectsContainer.appendChild(showOlderBtn);
  olderProjectsContainer.appendChild(hiddenCounter);
  olderProjectsContainer.appendChild(noHiddenMsg);

  let olderProjectsVisible = false;
  showOlderBtn.addEventListener('click', () => {
    olderProjectsVisible = !olderProjectsVisible;

    // If we have active filters, apply them to the newly visible projects
    filterProjects();

    showOlderBtn.innerHTML = olderProjectsVisible ?
      '<i class="fas fa-archive"></i> Hide Older Projects' :
      '<i class="fas fa-archive"></i> Show Older Projects';

    // Show/hide the counter based on visibility state
    hiddenCounter.style.display = olderProjectsVisible ? 'none' : 'inline';
    noHiddenMsg.style.display = 'none'; // Always hide the message when toggling
  });

  // Add tags to filter container
  const sortedTags = Array.from(allTags).sort();
  sortedTags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.className = 'filter-tag';
    tagElement.textContent = tag;
    tagElement.addEventListener('click', () => {
      tagElement.classList.toggle('active');
      filterProjects();
      updateClearFiltersButton();
    });
    filterTags.appendChild(tagElement);
  });

  // Add elements to the DOM
  filterContainer.appendChild(filterToggle);
  filterContainer.appendChild(filterTags);
  filterContainer.appendChild(clearFilters);
  projectsSection.insertBefore(filterContainer, projectsSection.querySelector('.projects-grid'));
  projectsSection.insertBefore(olderProjectsContainer, projectsSection.querySelector('.projects-grid'));

  // Toggle filter tags visibility
  filterToggle.addEventListener('click', () => {
    const isVisible = filterTags.style.display === 'flex';
    filterTags.style.display = isVisible ? 'none' : 'flex';
    filterToggle.classList.toggle('active');
  });

  // Clear all active filters
  clearFilters.addEventListener('click', () => {
    const activeTags = filterTags.querySelectorAll('.filter-tag.active');
    activeTags.forEach(tag => tag.classList.remove('active'));
    filterProjects();
    clearFilters.style.display = 'none';
  });

  // Filter projects based on selected tags
  function filterProjects() {
    const selectedTags = Array.from(filterTags.querySelectorAll('.filter-tag.active'))
      .map(tag => tag.textContent.trim());

    let hiddenCount = 0;

    projectCards.forEach(card => {
      const cardTags = Array.from(card.querySelectorAll('.project-tag'))
        .map(tag => tag.textContent.trim());

      // Check if this card matches the current filter
      const matchesFilter = selectedTags.length === 0 ||
        selectedTags.every(tag => cardTags.includes(tag));

      // Handle visibility based on whether it's an older project and matches filter
      if (card.classList.contains('older-project')) {
        if (olderProjectsVisible) {
          // Older projects are visible, so show/hide based on filter
          card.style.display = matchesFilter ? '' : 'none';
        } else {
          // Older projects are hidden, but count those that would be visible
          card.style.display = 'none';
          if (matchesFilter) {
            hiddenCount++;
          }
        }
      } else {
        // Regular project, show/hide based on filter
        card.style.display = matchesFilter ? '' : 'none';
      }
    });

    // Update UI based on hidden count
    if (hiddenCount === 0 && !olderProjectsVisible) {
      // No hidden projects match the current filters
      showOlderBtn.disabled = true;
      showOlderBtn.classList.add('disabled');
      hiddenCounter.style.display = 'none';
      noHiddenMsg.style.display = 'inline';
    } else {
      // There are hidden projects that match the filters
      showOlderBtn.disabled = false;
      showOlderBtn.classList.remove('disabled');
      hiddenCounter.textContent = `(${hiddenCount} hidden)`;
      hiddenCounter.style.display = olderProjectsVisible ? 'none' : 'inline';
      noHiddenMsg.style.display = 'none';
    }
  }

  // Update clear filters button visibility
  function updateClearFiltersButton() {
    const hasActiveTags = filterTags.querySelector('.filter-tag.active') !== null;
    clearFilters.style.display = hasActiveTags ? 'flex' : 'none';
  }

  // Initialize the counter
  filterProjects();
});

