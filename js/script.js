document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. MOBILE MENU TOGGLE
  // ==========================================
  const toggleBtn = document.querySelector('.header__toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');
  
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // ==========================================
  // 2. HEADER SCROLL EFFECT
  // ==========================================
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ==========================================
  // 3. CANVAS PARTÍCULAS DE ENERGIA (BOLHAS INTERATIVAS)
  // ==========================================
  const canvas = document.getElementById('energy-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxAmbientBubbles = 40; // Bolhas de fundo constantes
    
    let mouse = {
      x: null,
      y: null
    };

    // Escuta movimento do mouse na página inteira
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY; // Relativo à área visível (viewport)

      // Spawna 1 a 2 bolhas interativas por movimento do mouse
      if (particles.length < 150) { // Limita o máximo de bolhas simultâneas para performance
        particles.push(new Bubble(mouse.x, mouse.y, true));
        if (Math.random() > 0.5) {
          particles.push(new Bubble(mouse.x + (Math.random() * 20 - 10), mouse.y + (Math.random() * 20 - 10), true));
        }
      }
    });

    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Bubble {
      constructor(x, y, isMouseBubble = false) {
        this.isMouseBubble = isMouseBubble;
        if (this.isMouseBubble) {
          this.x = x;
          this.y = y;
          this.size = Math.random() * 8 + 4; // Bolhas do mouse são um pouco maiores
          this.speedX = Math.random() * 1.2 - 0.6;
          this.speedY = -(Math.random() * 2 + 1);
          this.alpha = 1.0;
          this.fadeSpeed = Math.random() * 0.015 + 0.01;
        } else {
          this.reset();
        }
        
        // Cores temáticas das bolhas (Verde Neon ou Vermelho Neon)
        const randomColor = Math.random();
        if (randomColor > 0.25) {
          this.color = '#39FF14'; // Verde
          this.glowColor = 'rgba(57, 255, 20, 0.4)';
        } else {
          this.color = '#FF2D2D'; // Vermelho
          this.glowColor = 'rgba(255, 45, 45, 0.4)';
        }
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 6 + 2;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = -(Math.random() * 1.8 + 0.6);
        this.alpha = Math.random() * 0.6 + 0.2;
        this.fadeSpeed = 0; // Bolhas de fundo não morrem, apenas resetam
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Se for bolha gerada pelo mouse, ela diminui a opacidade até sumir
        if (this.isMouseBubble) {
          this.alpha -= this.fadeSpeed;
          this.size += 0.05; // Bolhas expandem ligeiramente enquanto sobem
        }

        // Condições de término / reset
        if (this.isMouseBubble) {
          if (this.alpha <= 0 || this.y < -50 || this.x < -50 || this.x > canvas.width + 50) {
            return false; // Deve ser removida
          }
        } else {
          if (this.y < -50 || this.x < -50 || this.x > canvas.width + 50) {
            this.reset();
          }
        }
        return true; // Continua ativa
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Desenha a borda da bolha (efeito oco)
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.2;
        ctx.shadowBlur = this.size * 0.8;
        ctx.shadowColor = this.color;
        ctx.stroke();

        // Adiciona um pequeno reflexo de luz interno para parecer esfera 3D
        ctx.beginPath();
        ctx.arc(this.x - this.size * 0.3, this.y - this.size * 0.3, this.size * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fill();

        ctx.restore();
      }
    }

    function initParticles() {
      particles = [];
      // Cria as bolhas ambientais de fundo
      for (let i = 0; i < maxAmbientBubbles; i++) {
        particles.push(new Bubble(0, 0, false));
      }
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight; // Relativo exatamente à tela de exibição fixa (100vh)
      initParticles();
    }

    // Atualiza o tamanho do canvas se a janela mudar
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Filtra e atualiza as bolhas, removendo as do mouse que já expiraram
      particles = particles.filter(p => {
        const active = p.update();
        if (active) {
          p.draw();
        }
        return active;
      });

      requestAnimationFrame(animate);
    }
    animate();
  }

  // ==========================================
  // 4. ACCORDEÃO FAQ
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');
    const answerWrapper = item.querySelector('.faq-item__answer-wrapper');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Fecha todos os FAQs ativos
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-item__answer-wrapper').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        answerWrapper.style.maxHeight = answerWrapper.scrollHeight + "px";
      }
    });
  });

  // ==========================================
  // 5. CRONÔMETRO DE URGÊNCIA EVERGREEN
  // ==========================================
  const countdownDays = document.getElementById('days');
  const countdownHours = document.getElementById('hours');
  const countdownMinutes = document.getElementById('minutes');
  const countdownSeconds = document.getElementById('seconds');

  if (countdownHours && countdownMinutes && countdownSeconds) {
    // Definimos uma contagem regressiva fictícia persistente (ex: 2h 14m 45s a partir de quando o user acessa)
    // Para parecer real, armazenamos a data final no localStorage. Se não houver, criamos uma para + 2h 14m 45s.
    let targetTime = localStorage.getItem('mansao_maromba_promo_deadline');
    
    if (!targetTime) {
      const now = new Date().getTime();
      // 2 horas, 14 minutos e 45 segundos em milissegundos
      const duration = (2 * 60 * 60 + 14 * 60 + 45) * 1000;
      targetTime = now + duration;
      localStorage.setItem('mansao_maromba_promo_deadline', targetTime);
    } else {
      targetTime = parseInt(targetTime, 10);
      // Se a contagem já acabou, reseta o tempo para manter o gatilho ativo para novos acessos
      if (targetTime - new Date().getTime() < 0) {
        const now = new Date().getTime();
        const duration = (1 * 60 * 60 + 38 * 60 + 20) * 1000; // Tempo reduzido para parecer mais urgente no retorno
        targetTime = now + duration;
        localStorage.setItem('mansao_maromba_promo_deadline', targetTime);
      }
    }

    function updateCountdown() {
      const currentTime = new Date().getTime();
      const difference = targetTime - currentTime;

      if (difference <= 0) {
        // Se zerar, reseta com 2 horas para continuar a urgência sem crashar
        const now = new Date().getTime();
        targetTime = now + (2 * 60 * 60 + 14 * 60 + 45) * 1000;
        localStorage.setItem('mansao_maromba_promo_deadline', targetTime);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (countdownDays) countdownDays.textContent = String(days).padStart(2, '0');
      countdownHours.textContent = String(hours).padStart(2, '0');
      countdownMinutes.textContent = String(minutes).padStart(2, '0');
      countdownSeconds.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // ==========================================
  // 6. ESTATÍSTICAS ANIMADAS (CONTADORES)
  // ==========================================
  const statNumbers = document.querySelectorAll('.stat-item__number');
  
  const animateStats = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetVal = parseFloat(target.getAttribute('data-target'));
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';
        let currentVal = 0;
        const duration = 2000; // 2s
        const steps = 60;
        const increment = targetVal / steps;
        const stepTime = duration / steps;
        
        let counter = setInterval(() => {
          currentVal += increment;
          if (currentVal >= targetVal) {
            currentVal = targetVal;
            clearInterval(counter);
          }
          
          // Formatação com pontos de milhar se necessário
          let displayVal = currentVal;
          if (targetVal >= 1000 && !target.getAttribute('data-decimal')) {
            displayVal = Math.floor(currentVal).toLocaleString('pt-BR');
          } else if (target.getAttribute('data-decimal')) {
            displayVal = currentVal.toFixed(0);
          } else {
            displayVal = Math.floor(currentVal);
          }

          target.textContent = `${prefix}${displayVal}${suffix}`;
        }, stepTime);
        
        observer.unobserve(target); // roda apenas uma vez
      }
    });
  };

  const statsObserver = new IntersectionObserver(animateStats, {
    threshold: 0.5
  });

  statNumbers.forEach(stat => {
    statsObserver.observe(stat);
  });

  // ==========================================
  // 7. LINKS ATIVOS E REVELAÇÃO AO SCROLL
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header__link, .mobile-menu__link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset + 150; // offset do header

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-neon-green');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-neon-green');
          }
        });
      }
    });
  });

  // Estilo de reveal nos elementos quando scrolla
  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealOnScroll, {
    threshold: 0.15
  });

  revealElements.forEach(el => {
    // Adiciona estilos inline ou garante via CSS a transição
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    revealObserver.observe(el);
  });

  // Classe utilitária extra para ativar no CSS
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
    .reveal.active {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(styleSheet);
});
