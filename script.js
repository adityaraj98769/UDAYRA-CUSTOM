 // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // // Mobile menu toggle
        // const mobileMenuButton = document.querySelector('.md\\:hidden');
        // const desktopMenu = document.querySelector('.hidden.md\\:flex');
        
        // mobileMenuButton.addEventListener('click', function() {
        //     // You can add mobile menu toggle logic here
        //     console.log('Mobile menu clicked');
        // });

        
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const body = document.body;
    
    // Create mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobileMenu';
    mobileMenu.className = 'fixed inset-0 bg-[#0A1628] z-40 md:hidden transform translate-x-full transition-transform duration-300';
    mobileMenu.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full gap-8 px-6">
            <a href="#usp" class="text-white text-2xl hover:text-[#C9A84C] transition-colors tracking-wide">About</a>
            <a href="#occasions" class="text-white text-2xl hover:text-[#C9A84C] transition-colors tracking-wide">Occasions</a>
            <a href="#process" class="text-white text-2xl hover:text-[#C9A84C] transition-colors tracking-wide">Process</a>
            <a href="#reviews" class="text-white text-2xl hover:text-[#C9A84C] transition-colors tracking-wide">Reviews</a>
            <a href="#contact" class="px-8 py-3 bg-[#C9A84C]/10 text-[#C9A84C] text-xl font-medium rounded-full border border-[#C9A84C]/20 hover:bg-[#C9A84C]/20 transition-all">Get Quote</a>
        </div>
    `;
    body.appendChild(mobileMenu);
    
    let isMenuOpen = false;
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                // Change hamburger to X
                this.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-6 h-6">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                `;
            } else {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                // Change X back to hamburger
                this.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-6 h-6">
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                `;
            }
        });
    }
    
    // Close menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            isMenuOpen = false;
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
            mobileMenuBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-6 h-6">
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
            `;
        });
    });
