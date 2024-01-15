/* MENU BURGER */

document.querySelector(".menu-burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".menu-nav-ul").classList.toggle("open");
});

/* SLIDER */

$(".slider").slick({
  arrows: false,
  dots: false,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  easing: "_linear",
  infinite: true,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  cssEase: "linear",
});

// Button slider navigation
$(".slider-btn-prew").click(function () {
  $(".slider").slick("slickPrev");
});

$(".slider-btn-next").click(function () {
  $(".slider").slick("slickNext");
});

/* SUBCATEGORY DROPDOWN */

$(document).ready(function () {
  // Hide subcategory dropdowns by default
  $(".subcategory-dropdown").hide();

  // Add click event to category items
  $(".category-item").click(function (event) {
    event.preventDefault();

    // Toggle the display of the subcategory-dropdown with sliding animation
    $(this).find(".subcategory-dropdown").slideToggle();
  });
});

// Function to open the modal with slow fade effect
function openModal() {
  var modalBackground = $("#modal_background");
  var modal = $("#modal");

  // Set initial styles
  modalBackground.css("display", "block");
  modal.css("display", "block");

  // Trigger reflow
  void modalBackground[0].offsetWidth;
  void modal[0].offsetWidth;

  // Apply fade-in effect
  modalBackground.css("opacity", "1");
  modal.css("opacity", "1");

  // You can also add other effects here if needed, like moving the modal

  // Add an event listener to close the modal when clicking outside of it
  modalBackground.on("click", closeModal);
}

// Function to close the modal
function closeModal() {
  var modalBackground = $("#modal_background");
  var modal = $("#modal");

  // Apply fade-out effect
  modalBackground.css("opacity", "0");
  modal.css("opacity", "0");

  // Hide modal and background after the animation is complete
  setTimeout(function () {
    modalBackground.css("display", "none");
    modal.css("display", "none");
  }, 500); // Adjust this value to match the transition duration
}

// Add event listener to open modal when the link is clicked
$("#openModalButton").on("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  openModal();
});

// Add event listener to close modal when the close button is clicked
$("#modal_close_button").on("click", closeModal);
