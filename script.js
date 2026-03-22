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
  for (var i = 0; i < 60; i++) {
    var star = document.createElement('div');
    var size = Math.random() * 3 + 1;
    star.style.position = 'fixed';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.backgroundColor = '#ffffff';
    star.style.borderRadius = '50%';
    star.style.opacity = Math.random() * 0.6 + 0.3;
    star.style.pointerEvents = 'none';
    star.style.zIndex = '-1';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    document.body.appendChild(star);
    
    stars.push({
      element: star,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
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
    setTimeout(moveStars, 50);
  }
  moveStars();
});
document.addEventListener('click', function(e) {
  for (var i = 0; i < 8; i++) {
    var particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = Math.random() * 6 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = '#ffd966';
    particle.style.borderRadius = '50%';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.transition = 'all 0.5s ease-out';
    document.body.appendChild(particle);
    
    var dx = (Math.random() - 0.5) * 100;
    var dy = (Math.random() - 0.5) * 100;
    
    setTimeout(function(p, dx, dy) {
      p.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
      p.style.opacity = '0';
    }, 10, particle, dx, dy);
    
    setTimeout(function(p) {
      p.remove();
    }, 500, particle);
  }
});
function createFallingStar() {
  var star = document.createElement('div');
  star.innerHTML = '⭐';
  star.style.position = 'fixed';
  star.style.left = Math.random() * 100 + '%';
  star.style.top = '-30px';
  star.style.fontSize = Math.random() * 16 + 12 + 'px';
  star.style.opacity = Math.random() * 0.6 + 0.4;
  star.style.pointerEvents = 'none';
  star.style.zIndex = '9997';
  star.style.transition = 'all 3s linear';
  star.style.filter = 'drop-shadow(0 0 4px #ffd966)';
  document.body.appendChild(star);
  
  setTimeout(function() {
    star.style.top = '100vh';
    star.style.opacity = '0';
    star.style.transform = 'rotate(180deg)';
  }, 10);
  
  setTimeout(function() {
    star.remove();
  }, 3000);
}

setInterval(createFallingStar, 10000);

for (var i = 0; i < 120; i++) {
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
}
