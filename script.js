document.addEventListener('DOMContentLoaded', () => {
    
    // ===== NAVIGATION LOGIC =====
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideCounter = document.getElementById('slideCounter');
    const progressBar = document.getElementById('progressBar');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateNav() {
        // Update Counter
        slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;
        
        // Update Progress Bar
        const progress = ((currentSlide) / (totalSlides - 1)) * 100;
        progressBar.style.width = `${progress}%`;

        // Update Buttons
        prevBtn.disabled = currentSlide === 0;
        
        if (currentSlide === totalSlides - 1) {
            nextBtn.textContent = 'Finish';
        } else {
            nextBtn.innerHTML = 'Next &rarr;';
        }
    }

    function goToSlide(index) {
        if (index < 0 || index >= totalSlides) return;
        
        // Remove active class from current
        slides[currentSlide].classList.remove('active');
        
        // Update index
        currentSlide = index;
        
        // Add active class to new
        slides[currentSlide].classList.add('active');
        
        updateNav();
    }

    // Event Listeners for Buttons
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => {
        if (currentSlide === totalSlides - 1) {
            alert('Presentasi Selesai! Terima kasih.');
        } else {
            goToSlide(currentSlide + 1);
        }
    });

    // Keyboard Navigation (Arrow Keys)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            goToSlide(currentSlide + 1);
        } else if (e.key === 'ArrowLeft') {
            goToSlide(currentSlide - 1);
        } else if (e.key === 'Escape') {
            alert('Presentasi dihentikan.');
        }
    });

    // Init
    updateNav();


    // ===== INTERACTIVE 1: LINE HEIGHT SLIDER =====
    const lhSlider = document.getElementById('lineHeightSlider');
    const lhValue = document.getElementById('lhValue');
    const demoTextLH = document.getElementById('demoTextLH');

    if(lhSlider) {
        lhSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            lhValue.textContent = val;
            demoTextLH.style.lineHeight = val;
            
            // Visual feedback
            if(val < 1.3 || val > 1.8) {
                lhValue.style.color = '#E74C3C'; // Red if bad
            } else {
                lhValue.style.color = '#2ECC71'; // Green if ideal (1.4 - 1.6)
            }
        });
    }

    // ===== INTERACTIVE 2: QUIZ =====
    const quizBtns = document.querySelectorAll('.quiz-btn');
    const quizResult = document.getElementById('quizResult');

    quizBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Reset all buttons
            quizBtns.forEach(b => {
                b.classList.remove('correct', 'wrong');
                b.disabled = true; // Disable after answering
            });

            const isCorrect = this.getAttribute('data-correct') === 'true';
            
            if(isCorrect) {
                this.classList.add('correct');
                quizResult.innerHTML = '<span class="icon">✅</span> <strong>Benar!</strong> All-caps untuk paragraf panjang sangat sulit dibaca. Line-height yang rapat membuat teks bertabrakan, dan kontras warna merah pada abu-abu menyakitkan mata.';
                quizResult.style.borderLeftColor = '#2ECC71';
                quizResult.style.backgroundColor = 'rgba(46, 204, 113, 0.1)';
            } else {
                this.classList.add('wrong');
                // Highlight the correct one
                document.querySelector('.quiz-btn[data-correct="true"]').classList.add('correct');
                
                quizResult.innerHTML = '<span class="icon">❌</span> <strong>Kurang Tepat.</strong> Masalahnya lebih dari itu. All-caps untuk paragraf, line-height rapat, dan kontras warna yang buruk adalah kesalahan fatal.';
                quizResult.style.borderLeftColor = '#E74C3C';
                quizResult.style.backgroundColor = 'rgba(231, 76, 60, 0.1)';
            }

            quizResult.classList.remove('hidden');
        });
    });
});
