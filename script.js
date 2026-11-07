document.addEventListener('DOMContentLoaded', function() {
  var burger = document.querySelector('.burger');
  var navLinks = document.querySelector('.nav-links');
  
  if (burger && navLinks) {
    burger.addEventListener('click', function(e) {
      e.stopPropagation();
      navLinks.classList.toggle('active');
    });
    
    var allLinks = document.querySelectorAll('.nav-links a');
    for (var i = 0; i < allLinks.length; i++) {
      allLinks[i].addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    }
    
    document.addEventListener('click', function(event) {
      if (!navLinks.contains(event.target) && !burger.contains(event.target)) {
        navLinks.classList.remove('active');
      }
    });
  }
  
  var stars = [];
  for (var i = 0; i < 80; i++) {
    var star = document.createElement('div');
    star.classList.add('dynamic-star');
    var size = Math.random() * 4 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 5 + 's';
    star.style.animationDuration = (Math.random() * 4 + 2) + 's, ' + (Math.random() * 15 + 8) + 's';
    document.body.appendChild(star);
    
    stars.push({
      element: star,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
      x: Math.random() * 100,
      y: Math.random() * 100
    });
  }
  
  function moveStars() {
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      s.x += s.vx;
      s.y += s.vy;
      if (s.x > 100) s.x = 0;
      if (s.x < 0) s.x = 100;
      if (s.y > 100) s.y = 0;
      if (s.y < 0) s.y = 100;
      s.element.style.left = s.x + '%';
      s.element.style.top = s.y + '%';
    }
    requestAnimationFrame(moveStars);
  }
  moveStars();

  document.addEventListener('click', function(e) {
    for (var i = 0; i < 6; i++) {
      var particle = document.createElement('div');
      var size = Math.random() * 4 + 2;
      particle.style.position = 'fixed';
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.background = '#ffd966';
      particle.style.borderRadius = '50%';
      particle.style.left = e.clientX + 'px';
      particle.style.top = e.clientY + 'px';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '9999';
      particle.style.transition = 'all 0.5s ease-out';
      document.body.appendChild(particle);
      
      var dx = (Math.random() - 0.5) * 80;
      var dy = (Math.random() - 0.5) * 80;
      
      setTimeout(function(p, dx, dy) {
        p.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
        p.style.opacity = '0';
      }, 10, particle, dx, dy);
      
      setTimeout(function(p) {
        p.remove();
      }, 500, particle);
    }
  });
}

var quotes = [
  { text: '"Зямля такая маленькая і такая прыгожая. Беражыце яе!"', author: '— Пётр Климук, лётчик-космонавт' },
  { text: '"Космос — это не только романтика, это огромный труд и ответственность"', author: '— Владимир Коваленок, дважды Герой СССР' },
  { text: '"С космоса наша планета кажется хрупкой. Мы должны её беречь"', author: '— Олег Новицкий, Герой РФ' },
  { text: '"Як я марыла — так і здарылася. Галоўнае — верыць у сябе!"', author: '— Марина Василевская, Герой Беларуси' },
  { text: '"Космос — это не работа, это образ жизни и состояние души"', author: '— Георгий Гречко, дважды Герой СССР' },
  { text: '"Выход в открытый космос — момент, когда понимаешь, насколько человек мал и одновременно велик"', author: '— Анатолий Арцебарский, Герой СССР' }
];

var today = new Date();
var startOfYear = new Date(today.getFullYear(), 0, 0);
var diff = today - startOfYear;
var dayOfYear = Math.floor(diff / 86400000);
var quoteIndex = dayOfYear % quotes.length;

document.getElementById('quoteText').innerHTML = quotes[quoteIndex].text;
document.getElementById('quoteAuthor').innerHTML = quotes[quoteIndex].author; 
});
