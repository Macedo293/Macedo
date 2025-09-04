
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
     
        const flavorButtons = document.querySelectorAll('.flavor-btn');
        const sorveteCards = document.querySelectorAll('.sorvete-card');
        
        flavorButtons.forEach(button => {
            button.addEventListener('click', () => {
               
                flavorButtons.forEach(btn => btn.classList.remove('active'));
                
               
                button.classList.add('active');
                
                const category = button.getAttribute('data-category');
                
                sorveteCards.forEach(card => {
                    if (category === 'todos' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
    
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                if (this.getAttribute('href') !== '#') {
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                
 
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });