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

  document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("https://contact-form-backend-x6w6.onrender.com/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

    if (response.ok) {
      window.location.href = "/thank-you.html";
    } else {
      alert("Something went wrong.");
    }
  });