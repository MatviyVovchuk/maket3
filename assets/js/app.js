/* MENU BURGER */

$(".menu-burger").on("click", function () {
  $(this).toggleClass("active");
  $(".menu-nav-ul").toggleClass("open");
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

  // Check the initial screen width
  if ($(window).width() > 830) {
    enableHoverScript();
  }

  // Update the hover script on window resize
  $(window).resize(function() {
    if ($(window).width() > 830) {
      enableHoverScript();
    } else {
      disableHoverScript();
    }
  });

  function enableHoverScript() {
    $('.category-item').hover(
      function() {
        $(this).find('.subcategory-dropdown').stop(true, true).slideDown('slow');
      },
      function() {
        $(this).find('.subcategory-dropdown').stop(true, true).slideUp('slow');
      }
    );
  }

  function disableHoverScript() {
    $('.category-item').off('mouseenter mouseleave');
  }

});

/* MODAL BLOCK */

$(document).ready(function () {
  // Function to open the modal with slow fade effect
  function openModal() {
    clearValidationStyles();

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

    // Disable scroll
    $("body").addClass("modal-active");

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

    // Enable scroll
    $("body").removeClass("modal-active");

    // Hide modal and background after the animation is complete
    setTimeout(function () {
      modalBackground.css("display", "none");
      modal.css("display", "none");
      // Reset the form
      $("#modal_form")[0].reset();
    }, 500); // Adjust this value to match the transition duration
  }

  // Add event listener to open modal when the link is clicked
  $("#openModalButton").on("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    openModal();
  });

  // Add event listener to close modal when the close button is clicked
  $("#modal_close_button").on("click", closeModal);

  /* MODAL FORM VALIDATION */

  // Add mask to phone field
  $("#field_phone").inputmask({ mask: "+38 (999) 999-99-99" });

  // Form submit
  $("#modal_form").on("submit", function (event) {
    clearValidationStyles();

    // Check all field together
    let isFormValid = true;

    if (!validateName()) {
      isFormValid = false;
    }
    if (!validatePhone()) {
      isFormValid = false;
    }
    if (!validateEmail()) {
      isFormValid = false;
    }
    if (!validateMessage()) {
      isFormValid = false;
    }

    if (!isFormValid) {
      event.preventDefault();
    }

    // Check field one by one
    // if (!validateName() || !validatePhone() || !validateEmail()) {
    //   event.preventDefault();
    //   console.log("NOT VALID");
    // }

    // Uncomment the line below to submit the form or remove event.preventDefault();
    // $(this).unbind('submit').submit();
    event.preventDefault();
  });

  function validateName() {
    const nameField = $("#field_name");
    const nameValue = nameField.val().trim();

    if (nameValue.length < 2 || nameValue.length > 15) {
      setValidationError(
        nameField,
        "Ім'я повинно містити від 2 до 15 символів."
      );
      return false;
    }

    if (/\d/.test(nameValue)) {
      setValidationError(nameField, "Ім'я не повинно містити цифри.");
      return false;
    }

    return true;
  }

  function validatePhone() {
    const phoneField = $("#field_phone");
    const phoneValue = phoneField.val().replace(/\D/g, ""); // Remove non-numeric characters

    console.log(phoneField.val().replace(/\D/g, ""));

    if (phoneValue === "") {
      setValidationError(phoneField, "Введіть номер телефону.");
      return false;
    }

    const phoneRegex = /^\d{12}$/; // Assumes a 10-digit Ukrainian phone number with 38 phone code
    if (!phoneRegex.test(phoneValue)) {
      setValidationError(
        phoneField,
        "Введіть правильний номер телефону."
      );
      return false;
    }

    return true;
  }

  function validateEmail() {
    const emailField = $("#field_email");
    const emailValue = emailField.val().trim();

    if (emailField === "") {
      setValidationError(
        phoneField,
        "Введіть адресу електронної пошти."
      );
      return false;
    }

    if (!isValidEmail(emailValue)) {
      setValidationError(
        emailField,
        "Введіть правильну адресу електронної пошти."
      );
      return false;
    }

    return true;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateMessage() {
    const messageField = $("#field_message");
    const messageValue = messageField.val().trim();

    if (messageValue === "") {
      setValidationError(messageField, "Поле не може бути порожнім.");
      return false;
    }

    return true;
  }

  function setValidationError(element, message) {
    element.attr("placeholder", message).val(""); // Clear the value
    element.addClass("error");
  }

  function clearValidationStyles() {
    $("input, textarea").removeClass("error").attr("placeholder", "");
  }
});
