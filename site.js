/* emilbinny.com shared behaviour: menu, analytics events, signup and contact forms */
(function () {
  "use strict";

  function track(name, params) {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params || {});
    }
  }

  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Click events: <a data-ev="gradmentor_click" data-loc="hero">
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-ev]");
    if (!el) return;
    track(el.getAttribute("data-ev"), {
      location: el.getAttribute("data-loc") || "",
      link_url: el.getAttribute("href") || "",
    });
  });

  // Signup form: posts to Formspree without leaving the page
  var isLive = /(^|\.)emilbinny\.com$/.test(window.location.hostname);
  document.querySelectorAll("form[data-subscribe], form[data-contact]").forEach(function (form) {
    var isContact = form.hasAttribute("data-contact");
    var status = form.querySelector(".form-status");
    var submit = form.querySelector('button[type="submit"]');
    function say(text, state) {
      if (!status) return;
      status.textContent = text;
      status.setAttribute("data-state", state || "");
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      if (!isLive) {
        say("Preview only. Forms are switched off until this page is live.", "");
        return;
      }
      submit.disabled = true;
      say("Sending…", "");
      fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          form.reset();
          say(
            isContact
              ? "Thank you. Your message has been sent and I will reply by email."
              : "You're on the list. The next article will reach you by email.",
            "ok"
          );
          track(isContact ? "contact_submit" : "subscribe", { location: form.getAttribute("data-loc") || "" });
        })
        .catch(function () {
          say("That didn't go through. Please try again, or email emil@emilbinny.com.", "error");
        })
        .then(function () {
          submit.disabled = false;
        });
    });
  });
})();
