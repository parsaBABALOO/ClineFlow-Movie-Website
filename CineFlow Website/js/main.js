/* ==========================================================================
   1. INITIALIZE SLIDERS AND FOOTER COMPONENTS ON LOAD
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initTrendingSlider();
    initTestimonialsSlider();
    initFooter();
});

/* ==========================================================================
   2. TRENDING MOVIES SLIDER (Feature 6 - Horizontal Scroll)
   ========================================================================== */
function initTrendingSlider() {
    const trendingSection = document.getElementById("trending");
    if (!trendingSection) return;

    // Injecting Swiper HTML structure dynamically for clean integration
    trendingSection.innerHTML = `
        <h2 style="text-align: center; margin-bottom: 40px;">Trending Now</h2>
        <div class="swiper trending-slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="movie-card glass-panel" style="height: 350px;">
                        <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=500" alt="Trending 1" class="movie-poster">
                        <div class="movie-card-info">
                            <h3 class="movie-title">Cybernetic 2077</h3>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="movie-card glass-panel" style="height: 350px;">
                        <img src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=500" alt="Trending 2" class="movie-poster">
                        <div class="movie-card-info">
                            <h3 class="movie-title">Shadow Falls</h3>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="movie-card glass-panel" style="height: 350px;">
                        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=500" alt="Trending 3" class="movie-poster">
                        <div class="movie-card-info">
                            <h3 class="movie-title">Skyward Voyage</h3>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="movie-card glass-panel" style="height: 350px;">
                        <img src="https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=500" alt="Trending 4" class="movie-poster">
                        <div class="movie-card-info">
                            <h3 class="movie-title">Desert Chronicles</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    `;

    // Initialize Swiper.js for Trending Grid
    new Swiper(".trending-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            480: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2.5, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 }
        }
    });
}

/* ==========================================================================
   3. TESTIMONIALS SLIDER (Feature 8 - Auto Slide)
   ========================================================================== */
function initTestimonialsSlider() {
    const testimonialSection = document.getElementById("testimonials");
    if (!testimonialSection) return;

    testimonialSection.innerHTML = `
        <h2 style="text-align: center; margin-bottom: 40px;">What Our Critics Say</h2>
        <div class="swiper testimonial-slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="testimonial-card glass-panel">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150" alt="Sarah J." class="user-avatar">
                        <p class="user-review">"CineFlow completely redefined how I browse and rate films. The UI layout is incredibly smooth and the fluid animations feel next-generation!"</p>
                        <h4 style="color:var(--accent-neon)">Sarah Jenkins</h4>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="testimonial-card glass-panel">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" alt="Alex M." class="user-avatar">
                        <p class="user-review">"The design, the neon glow effects, and the integrated search functionality make it my absolute go-to interface for finding modern movie recommendations."</p>
                        <h4 style="color:var(--accent-neon)">Alex Miller</h4>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Initialize Swiper.js for Reviews (Autoplay enabled)
    new Swiper(".testimonial-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        }
    });
}

/* ==========================================================================
   4. ANIMATED FOOTER (Feature 20)
   ========================================================================== */
function initFooter() {
    const footer = document.querySelector(".main-footer");
    if (!footer) return;

    footer.innerHTML = `
        <div class="social-links">
            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-youtube"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem;">
            &copy; 2026 <span style="color: var(--accent-neon); font-weight:600;">CineFlow</span>. Engineered with Passion. All Rights Reserved.
        </p>
    `;
}
