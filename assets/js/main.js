document.addEventListener("DOMContentLoaded", () => {
  const supportsHover = window.matchMedia("(hover: hover)").matches;

  // =========================
  // MOBILE MENU (FULLSCREEN)
  // =========================
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileOverlay = document.querySelector(".mobile-menu-overlay");
  const mobileClose = document.querySelector(".mobile-menu-close");
  const mobileLinks = document.querySelectorAll(".mobile-menu-links a");

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("hidden");
    mobileMenu.setAttribute("aria-hidden", "false");
    hamburger?.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add("hidden");
    mobileMenu.setAttribute("aria-hidden", "true");
    hamburger?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  hamburger?.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  mobileClose?.addEventListener("click", closeMenu);
  mobileOverlay?.addEventListener("click", closeMenu);
  mobileLinks.forEach((a) => a.addEventListener("click", closeMenu));

  // =========================
  // SCROLL-FOCUS (tablet/móvil)
  // - Aplica clase .is-inview a .scroll-focus cuando entra al viewport
  // =========================
  const focusEls = Array.from(document.querySelectorAll(".scroll-focus"));

  if (focusEls.length) {
    // En desktop con hover, dejamos que hover domine (aún así queda bonito en scroll)
    const threshold = supportsHover ? 0.25 : 0.4;

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("is-inview");
            else e.target.classList.remove("is-inview");
          });
        },
        { threshold }
      );

      focusEls.forEach((el) => io.observe(el));
    } else {
      // Fallback
      const onScroll = () => {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        focusEls.forEach((el) => {
          const r = el.getBoundingClientRect();
          const inview = r.top < vh * 0.7 && r.bottom > vh * 0.3;
          el.classList.toggle("is-inview", inview);
        });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      onScroll();
    }
  }

  // =========================
  // SKILLS (about)
  // =========================
  const aboutHover = document.querySelector(".about-hover");
  const skillItems = document.querySelectorAll(".skill");

  skillItems.forEach((item) => {
    const value = Number(item.dataset.value || 0);
    const v = Math.max(0, Math.min(100, value));
    item.style.setProperty("--fill", `${v}%`);
  });

  // Hover desktop
  aboutHover?.addEventListener("mouseenter", () => {
    aboutHover.classList.add("is-active");
  });
  aboutHover?.addEventListener("mouseleave", () => {
    aboutHover.classList.remove("is-active");
  });

  // Scroll mobile/tablet
  if (aboutHover && "IntersectionObserver" in window) {
    const aboutIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) aboutHover.classList.add("is-active");
          else if (!supportsHover) aboutHover.classList.remove("is-active");
        });
      },
      { threshold: 0.35 }
    );
    aboutIO.observe(aboutHover);
  }

  // =========================
  // Gallery cards: en touch, mostrar label al tap
  // =========================
  const cards = document.querySelectorAll(".card");
  if (!supportsHover && cards.length) {
    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        // 1er tap: muestra label, 2do tap: navega link
        const link = card.querySelector("a");
        const label = card.querySelector(".card-label");
        if (!link || !label) return;

        const already = card.classList.contains("tap-reveal");
        if (!already) {
          e.preventDefault();
          cards.forEach((c) => c.classList.remove("tap-reveal"));
          card.classList.add("tap-reveal");
          label.style.opacity = "1";
          label.style.transform = "translateY(0)";
        }
      });
    });

    document.addEventListener("click", (e) => {
      const inside = e.target.closest(".card");
      if (!inside) {
        cards.forEach((c) => {
          c.classList.remove("tap-reveal");
          const label = c.querySelector(".card-label");
          if (label) {
            label.style.opacity = "";
            label.style.transform = "";
          }
        });
      }
    });
  }

  // Escape closes menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) closeMenu();
    }
  });
});
