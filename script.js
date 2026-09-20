const IMG_FATHER = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAAAAAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQA[...]
const IMG_MOTHER = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAAAAAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQA[...]
const IMG_FAUWAZ = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAAAAAAD/6zSTSlACEQAAAAEAADSJanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANGNqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOjE2YzA4NGV[...]
const IMG_SABIRAT = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAAAAAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQ[...]
const IMG_JIBRIN = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAAAAAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQ[...]
const IMG_RAHINA = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAAAAAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQ[...]
const IMG_MUNASSAT = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAAAAAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJ[...]
const IMG_IRFAN = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAAAAAAD/6zSTSlACEQAAAAEAADSJanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANGNqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOmQwMTVhYzFh[...]
const IMG_GROUP1 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAAAAAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQ[...]
const IMG_GROUP2 = IMG_GROUP1;

const allImageMap = {
  fatherImg: IMG_FATHER,
  motherImg: IMG_MOTHER,
  fauwazImg: IMG_FAUWAZ,
  irfanImg: IMG_IRFAN,
  sabiratImg: IMG_SABIRAT,
  jibrinImg: IMG_JIBRIN,
  rahinaImg: IMG_RAHINA,
  munassatImg: IMG_MUNASSAT,
  heroImg: IMG_GROUP1,
  heroBgBlur: IMG_GROUP1,
  group1Img: IMG_GROUP1,
  group2Img: IMG_GROUP2
};

Object.entries(allImageMap).forEach(([id, src]) => {
  const el = document.getElementById(id);
  if (el) {
    el.src = src;
  }
});

const nav = document.getElementById('siteNav');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

const setNavState = () => {
  if (!nav) return;
  if (window.scrollY > 18) {
    nav.classList.add('solid');
  } else {
    nav.classList.remove('solid');
  }
};

setNavState();
window.addEventListener('scroll', setNavState, { passive: true });

const toggleMenu = (shouldOpen) => {
  if (!mobileMenu || !openMenu) return;
  mobileMenu.classList.toggle('open', shouldOpen);
  openMenu.setAttribute('aria-expanded', String(shouldOpen));
  document.body.style.overflow = shouldOpen ? 'hidden' : '';
};

if (openMenu) {
  openMenu.addEventListener('click', () => toggleMenu(true));
}

if (closeMenu) {
  closeMenu.addEventListener('click', () => toggleMenu(false));
}

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => toggleMenu(false));
});

const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el) => revealObserver.observe(el));
