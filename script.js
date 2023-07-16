window.addEventListener('DOMContentLoaded', function () {
    const carouselSections = document.querySelectorAll('.wrapper section');
    const paginationRadios = document.querySelectorAll('.pagination input[type="radio"]');
  
    // Function to handle carousel navigation
    function navigateCarousel(e) {
      e.preventDefault();
      const target = e.target.getAttribute('href');
      const section = document.querySelector(target);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  
    // Function to update pagination based on current section
    function updatePagination() {
        const currentSectionId = Array.from(carouselSections).findIndex(section => {
          const rect = section.getBoundingClientRect();
          return rect.left >= 0 && rect.right <= window.innerWidth;
        });
      
        paginationRadios.forEach((radio, index) => {
          if (index === currentSectionId) {
            radio.checked = true;
            radio.parentNode.classList.add('active');
          } else {
            radio.parentNode.classList.remove('active');
          }
        });
      }
  
    // Add event listeners to navigation arrows
    const leftArrows = document.querySelectorAll('.left-arrow');
    const rightArrows = document.querySelectorAll('.right-arrow');
  
    leftArrows.forEach(arrow => {
      arrow.addEventListener('click', navigateCarousel);
    });
  
    rightArrows.forEach(arrow => {
      arrow.addEventListener('click', navigateCarousel);
    });
  
    // Add event listeners to pagination radios
    paginationRadios.forEach(radio => {
      radio.addEventListener('change', function () {
        const targetSectionId = Array.from(paginationRadios).indexOf(this);
        const targetSection = carouselSections[targetSectionId];
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Add event listener to update pagination on scroll
    window.addEventListener('scroll', updatePagination);
  });