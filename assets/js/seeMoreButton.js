export function seeMoreButton() {
  const containers = document.querySelectorAll(".category");

  containers.forEach((category) => {
    const container = category.querySelector(".container");
    const button = category.querySelector(".see-more-btn");

    if (container && button) {
      const items = container.children; // Select all child elements (grid items)

      updateButtonVisibility(button);

      // Set the visibility of items
      const updateItemsVisibility = () => {
        const visibleItems = getVisibleItems();

        // Hide all items beyond the visible range
        for (let i = 0; i < items.length; i++) {
          items[i].style.display = i < visibleItems ? "block" : "none";
        }
      };

      updateItemsVisibility();

      // Add "See More" functionality
      button.addEventListener("click", () => {
        const isExpanded = button.textContent === "Voir moins";

        if (isExpanded) {
          updateItemsVisibility();
          button.textContent = "Voir plus";
        } else {
          for (let i = 0; i < items.length; i++) {
            items[i].style.display = "block";
          }
          button.textContent = "Voir moins";
        }
      });
      // Update visibility on window resize
      window.addEventListener("resize", updateItemsVisibility);
    }
  });
}

// Get the number of items to show based on screen size
const getVisibleItems = () => {
  if (window.innerWidth <= 768) return 2; // Mobile: 2 items
  if (window.innerWidth <= 1280) return 4; // Tablet: 4 items
  return 6; // Desktop: 6 items
};

// Handle button visibility based on screen size
const updateButtonVisibility = (button) => {
  if (window.innerWidth <= 1280) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
