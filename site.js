/* emilbinny.com shared behaviour: menu, analytics events, signup and contact forms */
/* Microsoft Clarity (session recordings and heatmaps). Visitors in Europe get it only after they allow analytics. */
function ebLoadClarity() {
  if (window.clarity) return;
  (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","zdpecbkrll");
}
(function () {
  var tz = "", c = null;
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
  try { c = localStorage.getItem("eb-consent"); } catch (e) {}
  if (!/^Europe\//.test(tz) || c === "yes") ebLoadClarity();
})();

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

  // Consent banner. The page head sets window.ebAskConsent for visitors in Europe.
  if (window.ebAskConsent) {
    var bar = document.createElement("div");
    bar.className = "consent";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Cookies");
    bar.innerHTML =
      '<p>This site uses Google Analytics cookies to count visits. <a href="/privacy.html">Privacy</a></p>' +
      '<div><button type="button" class="btn btn--line btn--sm" data-consent="no">Decline</button>' +
      '<button type="button" class="btn btn--gold btn--sm" data-consent="yes">Allow</button></div>';
    document.body.appendChild(bar);
    bar.addEventListener("click", function (e) {
      var b = e.target.closest("[data-consent]");
      if (!b) return;
      var yes = b.getAttribute("data-consent") === "yes";
      try {
        localStorage.setItem("eb-consent", yes ? "yes" : "no");
      } catch (err) {}
      if (yes && typeof window.gtag === "function") {
        window.gtag("consent", "update", { analytics_storage: "granted" });
          ebLoadClarity();
      }
      bar.remove();
    });
  }

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
