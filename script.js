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


    // ===== INTERACTIVE 1: LINE HEIGHT & LETTER SPACING SLIDERS =====
    const lhSlider = document.getElementById('lineHeightSlider');
    const lhValue = document.getElementById('lhValue');
    const lsSlider = document.getElementById('letterSpacingSlider');
    const lsValue = document.getElementById('lsValue');
    const demoTextLH = document.getElementById('demoTextLH');

    if (lhSlider) {
        lhSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            lhValue.textContent = val;
            demoTextLH.style.lineHeight = val;
            
            if (val < 1.3 || val > 1.8) {
                lhValue.style.color = '#E74C3C'; // Merah jika kurang ideal
            } else {
                lhValue.style.color = '#2ECC71'; // Hijau jika ideal (1.4 - 1.6)
            }
        });
    }

    if (lsSlider) {
        lsSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            lsValue.textContent = `${val}px`;
            demoTextLH.style.letterSpacing = `${val}px`;
            
            if (val < 0 || val > 3) {
                lsValue.style.color = '#E74C3C';
            } else {
                lsValue.style.color = '#2ECC71';
            }
        });
    }

    // ===== INTERACTIVE 2: LINE LENGTH SLIDER =====
    const llSlider = document.getElementById('lineLengthSlider');
    const llValue = document.getElementById('llValue');
    const llStatus = document.getElementById('llStatus');
    const lineLengthBox = document.getElementById('lineLengthBox');

    if (llSlider) {
        llSlider.addEventListener('input', (e) => {
            const width = e.target.value;
            llValue.textContent = `${width}px`;
            lineLengthBox.style.maxWidth = `${width}px`;

            if (width < 400) {
                llStatus.textContent = 'Terlalu Pendek (< 40 Karakter)';
                llStatus.className = 'status-badge status-short';
            } else if (width > 750) {
                llStatus.textContent = 'Terlalu Panjang (> 80 Karakter)';
                llStatus.className = 'status-badge status-long';
            } else {
                llStatus.textContent = 'Ideal (45-75 Karakter)';
                llStatus.className = 'status-badge status-ideal';
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
