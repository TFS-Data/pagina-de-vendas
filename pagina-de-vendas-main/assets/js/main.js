/* =============================================================
   AETERNA Smartwatch — main.js
   Comportamentos: AOS init, Navbar scroll, Smooth scroll
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── 1. AOS — Animate On Scroll ────────────────────────────
     Dispara animações de entrada nos elementos com data-aos
     conforme o usuário rola a página.
  ─────────────────────────────────────────────────────────── */
  AOS.init({
    duration: 700,       // ms de duração padrão
    easing: 'ease-out-cubic',
    once: true,          // anima só na primeira vez que aparece
    offset: 80,          // px antes do elemento entrar na viewport
  });


  /* ─── 2. Navbar — adiciona classe ao fazer scroll ────────────
     Quando o usuário desce mais de 40px, a nav recebe
     .navbar-scrolled que aumenta o opaco e adiciona sombra.
  ─────────────────────────────────────────────────────────── */
  const navbar = document.getElementById('main-nav');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    }, { passive: true });
  }


  /* ─── 3. Smooth Scroll para âncoras internas ─────────────────
     Intercepta cliques em links #hash e desliza suavemente
     até a seção correta, compensando a altura da navbar fixa.
  ─────────────────────────────────────────────────────────── */
  const NAV_HEIGHT = 80; // px — altura da navbar fixa

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});
