// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  // 'https://source.unsplash.com/random/1000x1000/?sky',
  // 'https://source.unsplash.com/random/1000x1000/?landscape',
  // 'https://source.unsplash.com/random/1000x1000/?ocean',
  // 'https://source.unsplash.com/random/1000x1000/?moutain',
  // 'https://source.unsplash.com/random/1000x1000/?forest'
  './img/13.jpg',
  './img/14.jpg',
  './img/15.jpg',
  './img/16.jpg',
    './img/18.jpg',
    './img/23.jpg',
    './img/23.jpg',
    
    './img/24.jpg',
    './img/25.jpg',
    './img/12.jpg',
   './img/55.gif', 
    './img/22.jpg'
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 12],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// first 12 cards
for (let i = 0; i < 12; i++) {
  appendNewCard();
}

