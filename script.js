(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) root.setAttribute('data-theme', storedTheme);

  themeToggle?.addEventListener('click', () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = root.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  navToggle?.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mainNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  document.querySelectorAll('.timeline-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.timeline-item');
      const isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });

  const luminaOrbs = document.querySelectorAll('.lumina-orb');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (luminaOrbs.length && !reduceMotion) {
    let ticking = false;
    const updateLumina = () => {
      const scrollY = window.scrollY;
      luminaOrbs.forEach((orb, i) => {
        const freq = 700 + i * 180;
        const amp = 90 + i * 20;
        const tx = Math.sin(scrollY / freq + i * 1.8) * amp;
        const ty = Math.cos(scrollY / (freq * 0.8) + i * 1.2) * (amp * 0.8);
        const rotate = (scrollY / 15 + i * 45) % 360;
        orb.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rotate}deg)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateLumina);
        ticking = true;
      }
    }, { passive: true });
    updateLumina();
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.main-nav a');
  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = document.querySelector(`.main-nav a[href="#${entry.target.id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.removeAttribute('aria-current'));
          link.setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => navObserver.observe(s));
  }

  document.querySelector('.print-cv')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.print();
  });
})();
