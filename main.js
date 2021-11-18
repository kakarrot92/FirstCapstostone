const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.navlist');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('nav-active');
});

navList.addEventListener('click', (e) => {
  if (navList.classList.contains('nav-active')) {
    if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
      navList.classList.remove('nav-active');
    }
  }
});

const speakers = [
  {
    img: 'images/card-img.png',
    name: 'Keren Spector',
    textCard: 'Studio Director',
    company: 'Other Side Entertainment',
  },
  {
    img: 'images/card-img-1.png',
    name: 'Matt Johanson',
    textCard: 'Production Menager',
    company: 'WARGAMING',
  },
  {
    img: 'images/card-img-2.png',
    name: 'Jesica Lange',
    textCard: 'CRM Manager',
    company: 'OWLCAT GAMES',
  },
  {
    img: 'images/card-img-3.png',
    name: 'Brad Stevens',
    textCard: 'Senior Sound Designer',
    company: 'HAZELIGHT',
  },
  {
    img: 'images/card-img-4.png',
    name: 'Loren Zheleva',
    textCard: 'Producer',
    company: 'Warmane',
  },
  {
    img: 'images/card-img-5.png',
    name: 'Dmitry Yashanov',
    textCard: 'Designer',
    company: 'Valve',
  },
];

const speaker = document.getElementById('speakers');
speakers.forEach((item) => {
  speaker.innerHTML += `
  <div class="speaker-card-1">
  <img src="${item.img}" class="img-card" alt="">
    <div class="card-details">
      <h2 class="speaker-name">${item.name}</h2>
      <h3 class="company">${item.company}</h3>
      <p class="speaker-dis">${item.textCard}</p>
    </div>
  </div>
  `;
});
