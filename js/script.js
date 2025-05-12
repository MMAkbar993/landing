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

// Replace the entire initAnimations function with this improved version
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

  // Add scroll event listener to check animations continuously
  window.addEventListener("scroll", checkAllAnimations)
}

// Add this new function to check all animations on scroll
function checkAllAnimations() {
  checkTimelineItems()
  checkProcessElements()
  checkFeatures()
  checkLogos()
  checkPortfolioItems()
}

// Modify the initTimelineAnimations function to reset animations when out of viewport
function initTimelineAnimations() {
  const timelineContainers = document.querySelectorAll(".timeline-container")

  // Add data-speed attributes for parallax effect
  timelineContainers.forEach((container, index) => {
    container.setAttribute("data-speed", (1 + index * 0.1).toFixed(1))
    container.classList.add("timeline-hidden")
  })

  // Initial check
  checkTimelineItems()
}

// Extract the checkTimelineItems function outside of initTimelineAnimations
function checkTimelineItems() {
  const timelineContainers = document.querySelectorAll(".timeline-container")

  timelineContainers.forEach((container) => {
    const rect = container.getBoundingClientRect()
    const isInViewport =
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 && rect.bottom >= 0

    if (isInViewport) {
      container.classList.add("timeline-visible")
    } else {
      // Reset animation when out of viewport
      container.classList.remove("timeline-visible")
      container.classList.add("timeline-hidden")
    }
  })
}

// Modify the initProcessAnimations function to reset animations
function initProcessAnimations() {
  const processHeader = document.querySelector(".process .header")
  const comparisonCards = document.querySelectorAll(".process .card")

  // Add initial classes
  if (processHeader) processHeader.classList.add("process-hidden")
  comparisonCards.forEach((card) => card.classList.add("card-hidden"))

  // Add floating animation to cards
  comparisonCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.5}s`
  })

  // Initial check
  checkProcessElements()

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

// Extract the checkProcessElements function
function checkProcessElements() {
  const processHeader = document.querySelector(".process .header")
  const comparisonCards = document.querySelectorAll(".process .card")

  const headerRect = processHeader?.getBoundingClientRect()
  if (headerRect) {
    const isHeaderInViewport =
      headerRect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 && headerRect.bottom >= 0

    if (isHeaderInViewport) {
      processHeader.classList.add("process-visible")
      processHeader.classList.remove("process-hidden")
    } else {
      // Reset animation when out of viewport
      processHeader.classList.remove("process-visible")
      processHeader.classList.add("process-hidden")
    }
  }

  comparisonCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect()
    const isCardInViewport =
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 && rect.bottom >= 0

    if (isCardInViewport) {
      // Add delay based on index
      setTimeout(() => {
        card.classList.add("card-visible")
        card.classList.remove("card-hidden")
      }, index * 200)
    } else {
      // Reset animation when out of viewport
      card.classList.remove("card-visible")
      card.classList.add("card-hidden")
    }
  })
}

// Modify the initFeaturesAnimations function
function initFeaturesAnimations() {
  const features = document.querySelectorAll(".feature")

  // Add initial classes
  features.forEach((feature) => feature.classList.add("feature-hidden"))

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
}

// Extract the checkFeatures function
function checkFeatures() {
  const features = document.querySelectorAll(".feature")

  features.forEach((feature, index) => {
    const rect = feature.getBoundingClientRect()
    const isInViewport =
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 && rect.bottom >= 0

    if (isInViewport) {
      // Add delay based on index
      setTimeout(() => {
        feature.classList.add("feature-visible")
        feature.classList.remove("feature-hidden")
      }, index * 150)
    } else {
      // Reset animation when out of viewport
      feature.classList.remove("feature-visible")
      feature.classList.add("feature-hidden")
    }
  })
}

// Modify the initLogoAnimations function
function initLogoAnimations() {
  const logoItems = document.querySelectorAll(".logo-item")

  // Add initial classes
  logoItems.forEach((logo) => logo.classList.add("logo-hidden"))

  // Add floating animation to logos
  logoItems.forEach((logo, index) => {
    logo.style.animationDelay = `${index * 0.3}s`
  })

  // Initial check
  checkLogos()

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

// Extract the checkLogos function
function checkLogos() {
  const logoItems = document.querySelectorAll(".logo-item")

  logoItems.forEach((logo, index) => {
    const rect = logo.getBoundingClientRect()
    const isInViewport =
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 && rect.bottom >= 0

    if (isInViewport) {
      // Add delay based on index
      setTimeout(() => {
        logo.classList.add("logo-visible")
        logo.classList.remove("logo-hidden")
      }, index * 100)
    } else {
      // Reset animation when out of viewport
      logo.classList.remove("logo-visible")
      logo.classList.add("logo-hidden")
    }
  })
}

// Modify the initPortfolioAnimations function
function initPortfolioAnimations() {
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  // Initial check to see which items are in viewport
  checkPortfolioItems()

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

  // Handle hover effects
  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const overlay = this.querySelector(".portfolio-overlay")
      if (overlay) overlay.style.transform = "translateY(0)"
    })

    item.addEventListener("mouseleave", function () {
      const overlay = this.querySelector(".portfolio-overlay")
      if (overlay) overlay.style.transform = "translateY(100%)"
    })
  })
}

// Extract the checkPortfolioItems function
function checkPortfolioItems() {
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  portfolioItems.forEach((item) => {
    const rect = item.getBoundingClientRect()
    const isInViewport =
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 && rect.bottom >= 0

    if (isInViewport) {
      item.classList.add("visible")
    } else {
      // Reset when out of viewport
      item.classList.remove("visible")
    }
  })
}
