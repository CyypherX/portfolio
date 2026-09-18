import { useEffect } from "react";
import "./Motion.css";

const REVEAL_SELECTORS = [
  ".section-label",
  ".interests-label",
  ".section-heading",
  ".section-description",
  ".about-copy p",
  ".skills-heading-row",
  ".skills-counter",
  ".skill-row",
  ".skills-preview",
  ".projects-header",
  ".project-section-heading",
  ".project-section-count",
  ".project-card",
  ".coming-project-card",
  ".more-projects-card",
  ".lab-intro",
  ".lab-terminal",
  ".interests-heading-row",
  ".interest-card",
  ".contact-intro",
  ".contact-card",
  ".site-footer",
];

const SURFACE_SELECTOR = [
  ".glass-card",
  ".project-card",
  ".contact-card",
  ".interest-card",
  ".skills-preview",
  ".lab-terminal",
  ".more-projects-card",
  ".code-window",
].join(",");

function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const portfolio = document.querySelector(".portfolio");

    if (!portfolio) return undefined;

    document.body.classList.add("motion-ready");
    portfolio.classList.add("motion-enhanced");

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cleanup = [];

    /* -----------------------------------------
       Mouse spotlight + per-surface lighting
    ----------------------------------------- */
    let pointerFrame = 0;
    let pendingPointer = null;

    const updatePointer = () => {
      pointerFrame = 0;
      if (!pendingPointer) return;

      const { clientX, clientY, target } = pendingPointer;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;

      portfolio.style.setProperty("--mouse-x", `${x}%`);
      portfolio.style.setProperty("--mouse-y", `${y}%`);

      const surface = target?.closest?.(SURFACE_SELECTOR);
      if (surface && portfolio.contains(surface)) {
        const rect = surface.getBoundingClientRect();
        const localX = ((clientX - rect.left) / rect.width) * 100;
        const localY = ((clientY - rect.top) / rect.height) * 100;
        surface.style.setProperty("--surface-x", `${localX}%`);
        surface.style.setProperty("--surface-y", `${localY}%`);
        surface.classList.add("surface-tracking");
      }

      pendingPointer = null;
    };

    const handlePointerMove = (event) => {
      if (!canHover) return;
      pendingPointer = event;
      if (!pointerFrame) {
        pointerFrame = window.requestAnimationFrame(updatePointer);
      }
    };

    if (canHover && !reduceMotion) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      cleanup.push(() => window.removeEventListener("pointermove", handlePointerMove));
    }

    /* -----------------------------------------
       Scroll progress + gentle ambient parallax
    ----------------------------------------- */
    let scrollFrame = 0;

    const updateScroll = () => {
      scrollFrame = 0;

      const scrollTop = window.scrollY || window.pageYOffset || 0;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(scrollTop / maxScroll, 1);

      portfolio.style.setProperty("--scroll-progress", progress.toFixed(4));
      portfolio.style.setProperty("--scroll-y", `${scrollTop}px`);
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
    };

    const handleScroll = () => {
      if (!scrollFrame) {
        scrollFrame = window.requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    cleanup.push(() => window.removeEventListener("scroll", handleScroll));

    /* -----------------------------------------
       Reveal sections + staggered content
    ----------------------------------------- */
    const sections = [...document.querySelectorAll(".portfolio main > section")];

    sections.forEach((section) => {
      section.classList.add("motion-section");

      const targets = [];
      REVEAL_SELECTORS.forEach((selector) => {
        section.querySelectorAll(selector).forEach((element) => {
          if (!targets.includes(element)) targets.push(element);
        });
      });

      targets.forEach((element, index) => {
        element.classList.add("motion-item");
        element.style.setProperty(
          "--motion-delay",
          `${Math.min(index * 55, 440)}ms`
        );
      });
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-visible");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    sections.forEach((section) => revealObserver.observe(section));
    cleanup.push(() => revealObserver.disconnect());

    /* -----------------------------------------
       Active navigation state
    ----------------------------------------- */
    const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    const navTargets = navLinks
      .map((link) => ({
        link,
        section: document.querySelector(link.getAttribute("href")),
      }))
      .filter(({ section }) => section);

    const setActiveNav = (id) => {
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("is-current", active);
      });
    };

    const navObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) setActiveNav(visible[0].target.id);
      },
      {
        rootMargin: "-22% 0px -62% 0px",
        threshold: [0.05, 0.15, 0.35],
      }
    );

    navTargets.forEach(({ section }) => navObserver.observe(section));
    cleanup.push(() => navObserver.disconnect());

    /* -----------------------------------------
       Surface hover tracking / glows
    ----------------------------------------- */
    const surfaces = [...document.querySelectorAll(SURFACE_SELECTOR)];

    surfaces.forEach((surface) => {
      surface.classList.add("motion-surface");

      const onEnter = () => surface.classList.add("surface-active");
      const onLeave = () => surface.classList.remove("surface-active");

      surface.addEventListener("pointerenter", onEnter);
      surface.addEventListener("pointerleave", onLeave);

      cleanup.push(() => {
        surface.removeEventListener("pointerenter", onEnter);
        surface.removeEventListener("pointerleave", onLeave);
      });
    });

    /* -----------------------------------------
       Ripple interaction for tactile controls
    ----------------------------------------- */
    if (canHover && !reduceMotion) {
      const rippleSelector = [
        ".primary-button",
        ".secondary-button",
        ".project-button",
        ".skill-row",
        ".contact-card",
        ".more-projects-card",
        ".lab-try button",
      ].join(",");

      const rippleTargets = [...document.querySelectorAll(rippleSelector)];

      rippleTargets.forEach((element) => {
        element.classList.add("ripple-host");

        const onClick = (event) => {
          const rect = element.getBoundingClientRect();
          const ripple = document.createElement("span");
          ripple.className = "motion-ripple";
          ripple.style.left = `${event.clientX - rect.left}px`;
          ripple.style.top = `${event.clientY - rect.top}px`;
          element.appendChild(ripple);

          window.setTimeout(() => ripple.remove(), 650);
        };

        element.addEventListener("click", onClick);
        cleanup.push(() => element.removeEventListener("click", onClick));
      });
    }

    /* -----------------------------------------
       Desktop custom cursor
    ----------------------------------------- */
    let cursor = null;
    let cursorDot = null;
    let cursorFrame = 0;
    let cursorX = 0;
    let cursorY = 0;
    let desiredX = 0;
    let desiredY = 0;

    const updateCursor = () => {
      cursorFrame = 0;
      cursorX += (desiredX - cursorX) * 0.16;
      cursorY += (desiredY - cursorY) * 0.16;

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      if (cursorDot) {
        cursorDot.style.transform = `translate3d(${desiredX}px, ${desiredY}px, 0)`;
      }

      if (cursor && (Math.abs(desiredX - cursorX) > 0.4 || Math.abs(desiredY - cursorY) > 0.4)) {
        cursorFrame = window.requestAnimationFrame(updateCursor);
      }
    };

    const ensureCursor = () => {
      if (!canHover || reduceMotion) return;

      cursor = document.createElement("div");
      cursor.className = "motion-cursor";

      cursorDot = document.createElement("div");
      cursorDot.className = "motion-cursor-dot";

      document.body.appendChild(cursor);
      document.body.appendChild(cursorDot);

      const interactive = document.querySelectorAll(
        'a, button, input, textarea, .skill-row, .contact-card, .interest-card, .project-card'
      );

      const enterHandlers = [];
      interactive.forEach((element) => {
        const handler = () => document.body.classList.add("cursor-hovering");
        const leave = () => document.body.classList.remove("cursor-hovering");
        element.addEventListener("pointerenter", handler);
        element.addEventListener("pointerleave", leave);
        enterHandlers.push([element, handler, leave]);
      });

      cleanup.push(() => {
        enterHandlers.forEach(([element, handler, leave]) => {
          element.removeEventListener("pointerenter", handler);
          element.removeEventListener("pointerleave", leave);
        });
        document.body.classList.remove("cursor-hovering");
        cursor?.remove();
        cursorDot?.remove();
      });
    };

    if (canHover && !reduceMotion) {
      ensureCursor();

      const onCursorMove = (event) => {
        desiredX = event.clientX;
        desiredY = event.clientY;
        if (!cursorFrame) cursorFrame = window.requestAnimationFrame(updateCursor);
      };

      window.addEventListener("pointermove", onCursorMove, { passive: true });
      cleanup.push(() => window.removeEventListener("pointermove", onCursorMove));
    }

    /* -----------------------------------------
       Hero / code-window ambient depth variables
    ----------------------------------------- */
    if (!reduceMotion) {
      const hero = document.querySelector(".hero");
      const codeWindow = document.querySelector(".code-window");

      const handleHeroPointer = (event) => {
        if (!hero || !codeWindow || !canHover) return;
        const rect = hero.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        codeWindow.style.setProperty("--hero-rx", `${(-y * 2.2).toFixed(2)}deg`);
        codeWindow.style.setProperty("--hero-ry", `${(x * 2.8).toFixed(2)}deg`);
      };

      const resetHeroPointer = () => {
        if (!codeWindow) return;
        codeWindow.style.setProperty("--hero-rx", "0deg");
        codeWindow.style.setProperty("--hero-ry", "0deg");
      };

      hero?.addEventListener("pointermove", handleHeroPointer, { passive: true });
      hero?.addEventListener("pointerleave", resetHeroPointer);

      cleanup.push(() => {
        hero?.removeEventListener("pointermove", handleHeroPointer);
        hero?.removeEventListener("pointerleave", resetHeroPointer);
      });
    }

    /* -----------------------------------------
       Clean-up
    ----------------------------------------- */
    return () => {
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      cleanup.reverse().forEach((dispose) => dispose());
      document.body.classList.remove("motion-ready", "cursor-hovering");
      portfolio.classList.remove("motion-enhanced");
    };
  }, []);

  return null;
}

export default MotionEffects;
