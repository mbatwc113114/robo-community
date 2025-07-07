 function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Progress bar animation
        function updateProgressBar() {
            const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            document.getElementById('progressBar').style.width = scrolled + '%';
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Initialize animations
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            
            // Observe all roadmap steps
            document.querySelectorAll('.roadmap-step').forEach(step => {
                observer.observe(step);
            });
            
            // Smooth scrolling for internal links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                });
            });
        });

        // Progress bar scroll listener
        window.addEventListener('scroll', updateProgressBar);

        // Add hover effects to tool cards
        document.addEventListener('DOMContentLoaded', function() {
            const toolCards = document.querySelectorAll('.tool-card');
            
            toolCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });

        // Add dynamic typing effect to hero title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }

        // Initialize typing effect
        window.addEventListener('load', function() {
            const heroTitle = document.querySelector('.hero-title');
            const originalText = heroTitle.textContent;
            setTimeout(() => {
                typeWriter(heroTitle, originalText, 150);
            }, 500);
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero-section');
            const heroContent = document.querySelector('.hero-content');
            
            if (heroSection && heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                heroSection.style.opacity = Math.max(0, 1 - scrolled / window.innerHeight);
            }
        });

        // Add click animation to step icons
        document.addEventListener('DOMContentLoaded', function() {
            const stepIcons = document.querySelectorAll('.step-icon');
            
            stepIcons.forEach(icon => {
                icon.addEventListener('click', function() {
                    this.style.transform = 'translate(-50%, -50%) scale(1.2)';
                    this.style.boxShadow = '0 0 50px rgba(0, 255, 136, 0.8)';
                    
                    setTimeout(() => {
                        this.style.transform = 'translate(-50%, -50%) scale(1)';
                        this.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.6)';
                    }, 200);
                });
            });
        });

        // Add resource link animations
        document.addEventListener('DOMContentLoaded', function() {
            const resourceLinks = document.querySelectorAll('.resources-list li');
            
            resourceLinks.forEach(link => {
                link.addEventListener('click', function() {
                    this.style.color = 'var(--primary-color)';
                    this.style.transform = 'translateX(10px)';
                    
                    setTimeout(() => {
                        this.style.color = '';
                        this.style.transform = '';
                    }, 300);
                });
            });
        });