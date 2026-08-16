const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

const weddingDate = new Date('2026-09-05T15:00:00+02:00');
const countdown = document.querySelector('#countdown');

function updateCountdown() {
  const difference = weddingDate - new Date();
  if (difference <= 0) {
    countdown.innerHTML = '<p>Itt a nagy nap! ✦</p>';
    return;
  }
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  countdown.innerHTML = `<div><strong>${days}</strong><span>nap</span></div><div><strong>${hours}</strong><span>óra</span></div><div><strong>${minutes}</strong><span>perc</span></div>`;
}

updateCountdown();
setInterval(updateCountdown, 60000);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
