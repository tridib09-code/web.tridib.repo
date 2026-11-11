// Thread & Form - basic interactions and GA4 demo event tracking.
// Replace G-XXXXXXXXXX in each HTML page with your own GA4 Measurement ID.

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
}

// Product/service interactions: select_item is used because a visitor selected
// an item to explore. This demo does not represent a purchase.
document.querySelectorAll(".product-action").forEach((button) => {
  button.addEventListener("click", () => {
    const item = {
      item_id: button.dataset.itemId || "sample-item",
      item_name: button.dataset.itemName || "Sample item",
      price: Number(button.dataset.itemPrice || 0),
      item_category: button.closest(".product-card")?.dataset.category || "uncategorised"
    };
    if (typeof window.gtag === "function") {
      window.gtag("event", "select_item", {
        item_list_id: "thread_form_collection",
        item_list_name: "Thread & Form Collection",
        items: [item]
      });
    }
    alert(`${item.item_name}\n\nThis is a demonstration product interaction. No purchase is made.`);
  });
});

// Collection category filters
const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    productCards.forEach((card) => {
      card.hidden = selected !== "all" && card.dataset.category !== selected;
    });
  });
});

// The contact and newsletter forms are intentionally demo-only.
// A successful browser-side validation triggers demo_form_submit, NOT generate_lead/sign_up,
// because no real delivery, lead capture, or subscription service is connected.
function trackDemoForm(formName) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "demo_form_submit", {
      form_name: formName,
      form_mode: "demonstration_only"
    });
  }
}

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#contact-status");
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      status.textContent = "Please complete all fields with valid information.";
      return;
    }
    trackDemoForm("contact_enquiry_demo");
    status.textContent = "Thanks! The demo form passed validation. No message was sent or stored.";
    contactForm.reset();
  });
}

const newsletterForm = document.querySelector("#newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#newsletter-status");
    if (!newsletterForm.checkValidity()) {
      newsletterForm.reportValidity();
      status.textContent = "Please enter a valid email address.";
      return;
    }
    trackDemoForm("newsletter_signup_demo");
    status.textContent = "Thanks! The demo form passed validation. You have not been added to a mailing list.";
    newsletterForm.reset();
  });
}
