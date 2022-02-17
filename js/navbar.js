const navToggle = document.querySelector('.mobile-nav-toggle'),
      nav = document.querySelector('.primary-nav');

navToggle.addEventListener('click', () => {
   const visible = nav.getAttribute('data-visible');
   if(visible === 'false') {
      nav.setAttribute('data-visible', true);
      navToggle.setAttribute('aria-expanded', true);
   } else {
      nav.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
   }
});