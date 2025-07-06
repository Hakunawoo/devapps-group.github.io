document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting DEVAPPS GROUP! We'll get back to you soon.");
});
  document.addEventListener("DOMContentLoaded", function() {
    const langSwitcher = document.getElementById("languageSwitcher");

    // Detect the current page to pre-select the dropdown
    const currentPage = window.location.pathname;

    if (currentPage.includes("index-fr")) {
      langSwitcher.value = "fr";
    } else {
      langSwitcher.value = "en";
    }

    langSwitcher.addEventListener("change", function() {
      if (this.value === "fr") {
        window.location.href = "index-fr.html";
      } else {
        window.location.href = "index.html";
      }
    });
  });