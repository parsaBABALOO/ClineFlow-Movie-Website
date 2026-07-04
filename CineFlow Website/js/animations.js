/* ==========================================================================
   1. RUN ALL ANIMATIONS WHEN THE DOM IS READY
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initCustomCursor();
    initLoader();
    initParticles();
    initTypedEffect();
    initAOS();
    initScrollTriggers(); // Handles counters and circular charts
});

/* ==========================================================================
   2. CUSTOM CURSOR & RIPPLE EFFECT (Feature 3)
   ========================================================================== */
function initCustomCursor() {
    const cursor = document.querySelector(".custom-cursor");
    
    if (!cursor) return;

    // Follow mouse coordinates
    window.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Hover detection for interactive items
    const hoverables = document.querySelectorAll("a, button, .movie-card, .form-input, .stars-rating i, .social-icon");
    hoverables.forEach(item => {
        item.addEventListener("mouseenter", () => cursor.classList.add("hovered"));
        item.addEventListener("mouseleave", () => cursor.classList.remove("hovered"));
    });

    // Ripple Effect on Click
    window.addEventListener("click", (e) => {
        const ripple = document.createElement("div");
        ripple.className = "cursor-ripple";
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);

        // Remove element after animation ends
        ripple.addEventListener("animationend", () => {
            ripple.remove();
        });
    });
}

/* ==========================================================================
   3. PROFESSIONAL PERCENTAGE LOADER (Feature 2)
   ========================================================================== */
function initLoader() {
    const loader = document.getElementById("loader");
    const percentText = document.querySelector(".loader-percentage");
    if (!loader || !percentText) return;

    let count = 0;
    const counterInterval = setInterval(() => {
        count += Math.floor(Math.random() * 5) + 2; // Random fast counts
        if (count >= 100) {
            count = 100;
            clearInterval(counterInterval);
            
            // GSAP to smoothly fade out loader
            gsap.to(loader, {
                opacity: 0,
                duration: 0.8,
                onComplete: () => {
                    loader.style.display = "none";
                    animateHeroContent(); // Trigger hero animation right after loading
                }
            });
        }
        percentText.textContent = `${count}%`;
    }, 40);
}

/* ==========================================================================
   4. TYPED.JS EFFECT & HERO ANIMATION (Feature 1)
   ========================================================================== */
function initTypedEffect() {
    if (document.querySelector(".typed-text")) {
        new Typed(".typed-text", {
            strings: ["Unlimited Movies.", "Ultimate Experience.", "CineFlow."],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });
    }
}

function animateHeroContent() {
    // Reveal header and hero content smoothly with GSAP
    gsap.from(".main-header", { y: -50, opacity: 0, duration: 1, ease: "power2.out" });
    gsap.from(".hero-content p", { y: 30, opacity: 0, duration: 1, delay: 0.3 });
    gsap.from(".glass-btn", { scale: 0.8, opacity: 0, duration: 0.8, delay: 0.6, ease: "back.out(1.7)" });
}

/* ==========================================================================
   5. FLOATING PARTICLES.JS (Feature 14)
   ========================================================================== */
function initParticles() {
    if (typeof particlesJS !== "undefined" && document.getElementById("particles-js")) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: "#00f0ff" },
                shape: { type: "circle" },
                opacity: { value: 0.3, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#00f0ff", opacity: 0.1, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: { detect_on: "canvas", events: { resize: true } }
        });
    }
}

/* ==========================================================================
   6. SCROLL ANIMATIONS (AOS CONFIG) (Feature 13)
   ========================================================================== */
function initAOS() {
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false
        });
    }
}

/* ==========================================================================
   7. COUNTERS & SKILLS/STATS CHARTS TRIGGERS (Features 7 & 11)
   ========================================================================== */
function initScrollTriggers() {
    setupCounters();
    setupCircularCharts();
}

// 7. Dynamic Numbers Counting Up From 0 On Scroll
function setupCounters() {
    const counterSection = document.getElementById("counters");
    if (!counterSection) return;

    // Inject the actual counters elements programmatically to maintain full code
    counterSection.innerHTML = `
        <div class="counters-wrapper">
            <div class="counter-item glass-panel">
                <div class="counter-number" data-target="500">0</div>
                <div class="counter-label">Movies Available</div>
            </div>
            <div class="counter-item glass-panel">
                <div class="counter-number" data-target="120">0</div>
                <div class="counter-label">User Reviews</div>
            </div>
            <div class="counter-item glass-panel">
                <div class="counter-number" data-target="50">0</div>
                <div class="counter-label">Categories</div>
            </div>
        </div>
    `;

    const counters = counterSection.querySelectorAll(".counter-number");
    
    // Intersection Observer to trigger when elements are visible on screen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute("data-target"));
                    let current = 0;
                    const increment = target / 50; // Speed modifier
                    
                    const updateCount = () => {
                        current += increment;
                        if (current < target) {
                            counter.textContent = `+${Math.ceil(current)}`;
                            setTimeout(updateCount, 30);
                        } else {
                            counter.textContent = `+${target}`;
                        }
                    };
                    updateCount();
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(counterSection);
}

// 11. Circular Skill/Movie Statistics Progress
function setupCircularCharts() {
    const chartSection = document.getElementById("stats-chart");
    if (!chartSection) return;

    chartSection.innerHTML = `
        <h2 style="text-align:center; margin-bottom: 40px;">Community Stats</h2>
        <div class="charts-container">
            <div class="chart-box">
                <div class="circle-chart">
                    <svg><circle class="circle-bg" cx="75" cy="75" r="70"></circle><circle class="circle-progress" id="p1" cx="75" cy="75" r="70"></circle></svg>
                    <div class="chart-percentage">88%</div>
                </div>
                <p>User Satisfaction</p>
            </div>
            <div class="chart-box">
                <div class="circle-chart">
                    <svg><circle class="circle-bg" cx="75" cy="75" r="70"></circle><circle class="circle-progress" id="p2" cx="75" cy="75" r="70"></circle></svg>
                    <div class="chart-percentage">95%</div>
                </div>
                <p>Streaming Quality</p>
            </div>
        </div>
    `;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Circle perimeter is 2 * PI * r = 2 * 3.1415 * 70 ≈ 440
                const c1 = document.getElementById("p1");
                const c2 = document.getElementById("p2");
                
                if(c1 && c2) {
                    c1.style.strokeDashoffset = 440 - (440 * 88) / 100;
                    c2.style.strokeDashoffset = 440 - (440 * 95) / 100;
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(chartSection);
}