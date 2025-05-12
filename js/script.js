document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // FAQ Accordion
  const accordionButtons = document.querySelectorAll(".accordion-button")

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const accordionItem = this.parentElement
      const isActive = accordionItem.classList.contains("active")

      // Close all accordion items
      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.classList.remove("active")
      })

      // If the clicked item wasn't active, open it
      if (!isActive) {
        accordionItem.classList.add("active")
      }
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Initialize animations for all sections
  initAnimations()

  // Initialize the first FAQ item as open
  const firstAccordionItem = document.querySelector(".accordion-item")
  if (firstAccordionItem) {
    firstAccordionItem.classList.add("active")
  }
})

// Main animation initialization function
function initAnimations() {
  // Portfolio Grid Animations
  initPortfolioAnimations()

  // Project Life Cycle Animations
  initTimelineAnimations()

  // Process Section Animations
  initProcessAnimations()

  // Why Choose Us Animations
  initFeaturesAnimations()

  // Client Logos Animations
  initLogoAnimations()
}

// Portfolio Grid Animations
function initPortfolioAnimations() {
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  // Initial check to see which items are in viewport
  checkPortfolioItems()

  // Check which portfolio items are in viewport
  function checkPortfolioItems() {
    portfolioItems.forEach((item) => {
      const rect = item.getBoundingClientRect()
      const isInViewport =
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 && rect.bottom >= 0

      if (isInViewport) {
        item.classList.add("visible")
      }
    })
  }

  // Parallax effect on scroll
  function parallaxScroll() {
    portfolioItems.forEach((item) => {
      if (item.classList.contains("visible")) {
        const speed = item.getAttribute("data-speed") || 1
        const yPos = -(window.scrollY * speed * 0.05)
        item.style.transform = `translateY(${yPos}px)`
      }
    })
  }

  // Check for new items in viewport on scroll
  window.addEventListener("scroll", () => {
    checkPortfolioItems()
    parallaxScroll()
  })

  // Handle hover effects
  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.querySelector(".portfolio-overlay").style.transform = "translateY(0)"
    })

    item.addEventListener("mouseleave", function () {
      this.querySelector(".portfolio-overlay").style.transform = "translateY(100%)"
    })
  })
}

// Project Life Cycle Timeline Animations
function initTimelineAnimations() {
  const timelineContainers = document.querySelectorAll(".timeline-container")

  // Add data-speed attributes for parallax effect
  timelineContainers.forEach((container, index) => {
    container.setAttribute("data-speed", (1 + index * 0.1).toFixed(1))
    container.classList.add("timeline-hidden")
  })

  // Check which timeline items are in viewport
  function checkTimelineItems() {
    timelineContainers.forEach((container) => {
      const rect = container.getBoundingClientRect()
      const isInViewport =
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 && rect.bottom >= 0

      if (isInViewport) {
        container.classList.add("timeline-visible")
      }
    })
  }

  // Parallax effect on timeline items
  function timelineParallax() {
    timelineContainers.forEach((container) => {
      if (container.classList.contains("timeline-visible")) {
        const speed = container.getAttribute("data-speed") || 1
        const yPos = -(window.scrollY * speed * 0.02)

        // Apply different transform based on left/right position
        if (container.classList.contains("left")) {
          container.style.transform = `translateX(${yPos}px)`
        } else {
          container.style.transform = `translateX(${-yPos}px)`
        }
      }
    })
  }

  // Initial check
  checkTimelineItems()

  // Check on scroll
  window.addEventListener("scroll", () => {
    checkTimelineItems()
    timelineParallax()
  })
}

// Process Section Animations
function initProcessAnimations() {
  const processHeader = document.querySelector(".process .header")
  const comparisonCards = document.querySelectorAll(".process .card")

  // Add initial classes
  if (processHeader) processHeader.classList.add("process-hidden")
  comparisonCards.forEach((card) => card.classList.add("card-hidden"))

  // Check if elements are in viewport
  function checkProcessElements() {
    const headerRect = processHeader?.getBoundingClientRect()
    if (headerRect && headerRect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85) {
      processHeader.classList.add("process-visible")
    }

    comparisonCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect()
      if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85) {
        // Add delay based on index
        setTimeout(() => {
          card.classList.add("card-visible")
        }, index * 200)
      }
    })
  }

  // Add floating animation to cards
  comparisonCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.5}s`
  })

  // Initial check
  checkProcessElements()

  // Check on scroll
  window.addEventListener("scroll", checkProcessElements)

  // Add hover effects for feature list items
  const listItems = document.querySelectorAll(".feature-list li")

  listItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.classList.add("feature-hover")
    })

    item.addEventListener("mouseleave", function () {
      this.classList.remove("feature-hover")
    })
  })
}

// Why Choose Us Section Animations
function initFeaturesAnimations() {
  const features = document.querySelectorAll(".feature")

  // Add initial classes
  features.forEach((feature) => feature.classList.add("feature-hidden"))

  // Check if features are in viewport
  function checkFeatures() {
    features.forEach((feature, index) => {
      const rect = feature.getBoundingClientRect()
      if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85) {
        // Add delay based on index
        setTimeout(() => {
          feature.classList.add("feature-visible")
        }, index * 150)
      }
    })
  }

  // Add hover effect for features
  features.forEach((feature) => {
    feature.addEventListener("mouseenter", function () {
      this.classList.add("feature-hover-active")
    })

    feature.addEventListener("mouseleave", function () {
      this.classList.remove("feature-hover-active")
    })
  })

  // Initial check
  checkFeatures()

  // Check on scroll
  window.addEventListener("scroll", checkFeatures)
}

// Client Logos Animations
function initLogoAnimations() {
  const logoItems = document.querySelectorAll(".logo-item")

  // Add initial classes
  logoItems.forEach((logo) => logo.classList.add("logo-hidden"))

  // Check if logos are in viewport
  function checkLogos() {
    logoItems.forEach((logo, index) => {
      const rect = logo.getBoundingClientRect()
      if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9) {
        // Add delay based on index
        setTimeout(() => {
          logo.classList.add("logo-visible")
        }, index * 100)
      }
    })
  }

  // Add floating animation to logos
  logoItems.forEach((logo, index) => {
    logo.style.animationDelay = `${index * 0.3}s`
  })

  // Initial check
  checkLogos()

  // Check on scroll
  window.addEventListener("scroll", checkLogos)

  // Add hover effect for logos with scale
  logoItems.forEach((logo) => {
    logo.addEventListener("mouseenter", function () {
      this.classList.add("logo-hover")
    })

    logo.addEventListener("mouseleave", function () {
      this.classList.remove("logo-hover")
    })
  })
}
