/* ==========================================================================
   1. MOVIE DATABASE (Mock Data)
   ========================================================================== */
const movieData = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 5, year: 2010, poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500" },
    { id: 2, title: "The Dark Knight", genre: "Action", rating: 5, year: 2008, poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=500" },
    { id: 3, title: "Interstellar", genre: "Sci-Fi", rating: 4, year: 2014, poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500" },
    { id: 4, title: "Avatar: The Way of Water", genre: "Adventure", rating: 4, year: 2022, poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=500" },
    { id: 5, title: "Dune: Part Two", genre: "Sci-Fi", rating: 5, year: 2024, poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=500" },
    { id: 6, title: "The Matrix", genre: "Action", rating: 4, year: 1999, poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500" }
];

/* ==========================================================================
   2. INITIALIZE COMPONENTS WHEN DOM IS LOADED
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initClock();
    initTheme();
    initMusic();
    renderMovies(movieData);
    initSearch();
    initContactForm();
});

/* ==========================================================================
   3. LIVE CLOCK & DATE (Feature 19)
   ========================================================================== */
function initClock() {
    const clockElement = document.getElementById("live-clock");
    if (!clockElement) return;

    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

/* ==========================================================================
   4. THEME TOGGLE WITH LOCAL STORAGE (Feature 10)
   ========================================================================== */
function initTheme() {
    const themeBtn = document.getElementById("theme-btn");
    const currentTheme = localStorage.getItem("theme") || "dark";

    if (currentTheme === "light") {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeBtn.addEventListener("click", () => {
        if (document.body.classList.contains("dark-theme")) {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem("theme", "dark");
        }
    });
}

/* ==========================================================================
   5. BACKGROUND MUSIC CONTROL (Feature 9)
   ========================================================================== */
function initMusic() {
    const musicBtn = document.getElementById("music-btn");
    // Creating a mock audio element since we don't have a real file running locally yet
    const audio = new Audio("assets/audio/bg-music.mp3");
    audio.loop = true;
    let isPlaying = false;

    musicBtn.addEventListener("click", () => {
        if (!isPlaying) {
            audio.play().catch(() => console.log("Audio play blocked by browser. Interaction required."));
            musicBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            musicBtn.style.color = "var(--accent-neon)";
        } else {
            audio.pause();
            musicBtn.innerHTML = '<i class="fas fa-music"></i>';
            musicBtn.style.color = "var(--text-main)";
        }
        isPlaying = !isPlaying;
    });
}

/* ==========================================================================
   6. RENDER MOVIE CARDS (Features 5, 16, 17)
   ========================================================================== */
function renderMovies(movies) {
    const movieGrid = document.getElementById("movies");
    if (!movieGrid) return;

    movieGrid.innerHTML = `
        <h2 style="grid-column: 1/-1; text-align: center; margin-bottom: 30px;">Discover Movies</h2>
        <div class="movie-grid" id="grid-container"></div>
    `;

    const container = document.getElementById("grid-container");
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const customRatings = JSON.parse(localStorage.getItem("ratings")) || {};

    if(movies.length === 0) {
        container.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--text-muted);">No movies found matching your criteria.</p>`;
        return;
    }

    movies.forEach(movie => {
        const isFav = favorites.includes(movie.id) ? "active" : "";
        const savedRating = customRatings[movie.id] || movie.rating;

        // Create Star Elements HTML
        let starsHTML = "";
        for (let i = 1; i <= 5; i++) {
            starsHTML += `<i class="${i <= savedRating ? 'fas' : 'far'} fa-star" data-value="${i}" data-movie-id="${movie.id}"></i>`;
        }

        const card = document.createElement("div");
        card.className = "movie-card glass-panel";
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-card-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:10px;">${movie.genre} | ${movie.year}</p>
                <div class="card-meta">
                    <div class="stars-rating">${starsHTML}</div>
                    <button class="fav-btn ${isFav}" data-id="${movie.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    setupCardEvents();
}

/* ==========================================================================
   7. LIVE SEARCH & FILTER (Feature 15)
   ========================================================================== */
function initSearch() {
    const searchSection = document.getElementById("search-section");
    if (!searchSection) return;

    searchSection.innerHTML = `
        <div class="search-container">
            <input type="text" id="movie-search" class="search-input" placeholder="Search movies by title or genre...">
        </div>
    `;

    const searchInput = document.getElementById("movie-search");
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = movieData.filter(movie => 
            movie.title.toLowerCase().includes(query) || 
            movie.genre.toLowerCase().includes(query)
        );
        renderMovies(filtered);
    });
}

/* ==========================================================================
   8. INTERACTION EVENTS (Favorites, Stars & Hover Simulation)
   ========================================================================== */
function setupCardEvents() {
    // 16. Favorites (LocalStorage)
    document.querySelectorAll(".fav-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(btn.getAttribute("data-id"));
            let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

            if (favorites.includes(id)) {
                favorites = favorites.filter(favId => favId !== id);
                btn.classList.remove("active");
            } else {
                favorites.push(id);
                btn.classList.add("active");
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
        });
    });

    // 17. Interactive Rating (Stars)
    document.querySelectorAll(".stars-rating i").forEach(star => {
        star.addEventListener("click", () => {
            const movieId = star.getAttribute("data-movie-id");
            const value = parseInt(star.getAttribute("data-value"));
            let customRatings = JSON.parse(localStorage.getItem("ratings")) || {};

            customRatings[movieId] = value;
            localStorage.setItem("ratings", JSON.stringify(customRatings));

            // Dynamically update stars in UI without full re-render
            const parent = star.parentElement;
            const siblings = parent.querySelectorAll("i");
            siblings.forEach((s, idx) => {
                if (idx < value) {
                    s.className = "fas fa-star";
                } else {
                    s.className = "far fa-star";
                }
            });
        });
    });
}

/* ==========================================================================
   9. CONTACT FORM VALIDATION (Feature 18)
   ========================================================================== */
function initContactForm() {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    contactSection.innerHTML = `
        <h2 style="text-align: center; margin-bottom: 40px;">Contact CineFlow</h2>
        <form class="contact-form glass-panel" id="c-form" novalidate>
            <div class="form-group">
                <input type="text" id="form-name" class="form-input" placeholder="Your Name" required>
                <span class="error-msg" id="name-error">Name is required.</span>
            </div>
            <div class="form-group">
                <input type="email" id="form-email" class="form-input" placeholder="Your Email" required>
                <span class="error-msg" id="email-error">Please enter a valid email.</span>
            </div>
            <div class="form-group">
                <textarea id="form-msg" class="form-input" rows="4" placeholder="Your Message" required style="resize:none;"></textarea>
                <span class="error-msg" id="msg-error">Message cannot be empty.</span>
            </div>
            <button type="submit" class="glass-btn" style="width:100%;">Send Message</button>
        </form>
    `;

    const form = document.getElementById("c-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById("form-name");
        const email = document.getElementById("form-email");
        const msg = document.getElementById("form-msg");

        // Simple validation logic
        if (!name.value.trim()) {
            document.getElementById("name-error").classList.add("visible");
            isValid = false;
        } else {
            document.getElementById("name-error").classList.remove("visible");
        }

        if (!email.value.includes("@") || !email.value.trim()) {
            document.getElementById("email-error").classList.add("visible");
            isValid = false;
        } else {
            document.getElementById("email-error").classList.remove("visible");
        }

        if (!msg.value.trim()) {
            document.getElementById("msg-error").classList.add("visible");
            isValid = false;
        } else {
            document.getElementById("msg-error").classList.remove("visible");
        }

        if (isValid) {
            alert("✨ Thank you! Your message was sent successfully.");
            form.reset();
        }
    });
}