document.addEventListener('DOMContentLoaded', function() {
  // ========== БУРГЕР-МЕНЮ ==========
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
  
  // ========== ЗВЁЗДЫ (ОПТИМИЗИРОВАННО) ==========
  var stars = [];
  var starCount = 120;
  
  for (var i = 0; i < starCount; i++) {
    var star = document.createElement('div');
    var size = Math.random() * 3 + 1;
    star.style.position = 'fixed';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.backgroundColor = Math.random() > 0.8 ? '#ffd966' : 'white';
    star.style.borderRadius = '50%';
    star.style.opacity = Math.random() * 0.6 + 0.3;
    star.style.pointerEvents = 'none';
    star.style.zIndex = '-1';
    document.body.appendChild(star);
    
    stars.push({
      element: star,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2
    });
  }
  
  var lastTime = 0;
  function moveStars(currentTime) {
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
  
  requestAnimationFrame(moveStars);
});
