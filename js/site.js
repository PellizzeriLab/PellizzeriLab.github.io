(function () {
  const reduceMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onScroll = () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const backToTop = document.getElementById('backToTop');
    const nav = document.querySelector('.site-navbar');

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

    if (scrollProgress) {
      scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    if (backToTop) {
      backToTop.classList.toggle('show', window.scrollY > 220);
    }

    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }
  };

  const initBackToTop = () => {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  };

  const initActiveNav = () => {
    const links = document.querySelectorAll('.navbar .nav-link');
    if (!links.length) return;

    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

    links.forEach((link) => {
      const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '') || '/';
      if (linkPath === currentPath) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  };

  const ensureImageAltText = () => {
    const imgs = document.querySelectorAll('img:not([alt])');
    imgs.forEach((img) => {
      img.setAttribute('alt', '');
    });
  };

  const initThemeToggle = () => {
    const btn = document.getElementById('themeToggle');
    const body = document.body;
    if (!btn || !body) return;

    const key = 'pellizzeri-theme';
    const saved = localStorage.getItem(key);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const startDark = saved ? saved === 'dark' : prefersDark;

    body.classList.toggle('dark-mode', startDark);
    btn.textContent = startDark ? '☀️' : '🌙';
    btn.setAttribute('aria-pressed', startDark ? 'true' : 'false');

    btn.addEventListener('click', () => {
      const nextDark = !body.classList.contains('dark-mode');
      body.classList.toggle('dark-mode', nextDark);
      btn.textContent = nextDark ? '☀️' : '🌙';
      btn.setAttribute('aria-pressed', nextDark ? 'true' : 'false');
      localStorage.setItem(key, nextDark ? 'dark' : 'light');
    });
  };

  const initReveal = () => {
    const candidates = document.querySelectorAll(
      '.content-card, .publication-card, .team-member-card, .gallery-card, .quick-link-card, .stats-card, .card'
    );

    if (!candidates.length || !('IntersectionObserver' in window) || reduceMotion) {
      candidates.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    candidates.forEach((el) => el.classList.add('reveal-up'));

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    candidates.forEach((el) => observer.observe(el));
  };

  const initCounters = () => {
    const cards = document.querySelectorAll('.stats-card[data-counter-target]');
    if (!cards.length) return;

    const animateCounter = (card) => {
      const target = Number(card.getAttribute('data-counter-target') || 0);
      const valueEl = card.querySelector('.stats-value');
      if (!valueEl || Number.isNaN(target)) return;

      if (reduceMotion) {
        valueEl.textContent = String(target);
        return;
      }

      const duration = 950;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        valueEl.textContent = String(Math.round(target * eased));
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) {
      cards.forEach(animateCounter);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    cards.forEach((c) => observer.observe(c));
  };

  const initPublicationFilter = () => {
    const input = document.getElementById('pubFilter');
    const clearBtn = document.getElementById('pubFilterClear');
    if (!input) return;

    const highlightCards = Array.from(document.querySelectorAll('.publication-card')).map((card) => ({
      el: card.closest('.col-lg-6, .col-md-6, .col-sm-6, .col') || card,
      text: card.innerText.toLowerCase(),
    }));

    const entries = Array.from(document.querySelectorAll('.pub-entry')).map((entry) => ({
      el: entry,
      text: entry.innerText.toLowerCase(),
    }));

    const yearSections = Array.from(document.querySelectorAll('.pub-year-group'));

    const applyFilter = () => {
      const q = input.value.trim().toLowerCase();

      highlightCards.forEach((item) => {
        const show = !q || item.text.includes(q);
        item.el.style.display = show ? '' : 'none';
      });

      entries.forEach((item) => {
        const show = !q || item.text.includes(q);
        item.el.style.display = show ? '' : 'none';
      });

      yearSections.forEach((section) => {
        const visibleEntries = section.querySelectorAll('.pub-entry:not([style*="display: none"])');
        section.style.display = visibleEntries.length ? '' : 'none';
      });
    };

    input.addEventListener('input', applyFilter);
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        applyFilter();
        input.focus();
      });
    }
  };

  const initReducedMotionCarousel = () => {
    if (!reduceMotion) return;
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach((el) => {
      el.setAttribute('data-bs-interval', 'false');
      el.setAttribute('data-bs-ride', 'false');
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', onScroll);

  initBackToTop();
  initThemeToggle();
  initActiveNav();
  ensureImageAltText();
  initReveal();
  initCounters();
  initPublicationFilter();
  initReducedMotionCarousel();
})();
