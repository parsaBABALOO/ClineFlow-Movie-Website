# ClineFlow-Movie-Website
# 🎬 CineFlow - Modern Cinematic Movie Hub

CineFlow is a premium, high-performance, and futuristic movie discovery platform designed with a **Cyberpunk Neon aesthetic** and modern **Glassmorphic** UI elements. Built as a fully responsive client-side web application, it integrates advanced CSS effects, dynamic Vanilla JS features, and popular animation libraries to deliver a next-generation user experience.

---

## 🚀 Live Demo & Preview
* **Layout:** Left-to-Right (LTR)
* **Design Philosophy:** Dark-first, Glassmorphism, Neon Accents (Cyan & Purple)

---

## ✨ Features (All 20 Integrated Components)

The project is structured logically across its core files and implements the following distinct features in order:

### 🌟 1. Visuals & Core Animations
* **Percentage Preloader:** A custom 0-100% dynamic loading screen that smoothly fades out using GSAP once assets are ready.
* **Cinematic Hero Video:** A full-screen ambient background video styled perfectly using `object-fit: cover` to prevent distortion.
* **Interactive Custom Cursor:** A neon glow ring that follows the mouse position, expands on interactive elements, and generates a **Ripple Wave Effect** on click.
* **Typed.js Integration:** A dynamic typewriter effect animating cinema headlines in the main hero section.
* **Floating Particles:** An infinite, mathematical particle background generated via canvas using **Particles.js**.

### 🧪 2. Core Functional Components
* **Dynamic Movie Grid:** A fully database-driven collection of curated movies rendered dynamically from a JSON mock database.
* **Advanced Live Search:** An instant, client-side filtering system that searches movies by title or genre in real-time without reloading the page.
* **Smart LocalStorage Favorites:** A persistent bookmarking system that allows users to "Like" films and saves their preferences across sessions.
* **Interactive Star Rating:** A fully functional 5-star grading component that updates the UI immediately and caches the ratings locally.
* **Ambient Background Music:** An interactive toggle audio controller with browser autoplay guard rails and dynamic icon styling.
* **Live Digital Clock:** A real-time running clock embedded in the navigation bar to track the user's local time.
* **Dark / Light Theme Toggle:** A dual-theme switch controller that shifts color palettes seamlessly and saves the selected scheme in the browser cache.

### 📊 3. Sliders & Statistical Visuals
* **Trending Carousel:** A touch-responsive horizontal carousel utilizing **Swiper.js** with fluid custom navigation buttons.
* **Testimonials Slider:** An automated loop slider presenting professional critique reviews with sleek animations.
* **Animated Counting Numbers:** Interactive statistic indicators that dynamically count up from 0 to their target values when scrolled into view.
* **SVG Circular Charts:** Dynamic circular skill/stat progress trackers using mathematical stroke offsets triggered via the Intersection Observer API.
* **Contact Form Validation:** A glassmorphic feedback form with rigorous interactive error handling and validation.

---

## 📂 Project Structure

```text
CineFlow/
├── index.html               # Semantic HTML5 Skeleton & CDN Library Scripts
├── css/
│   ├── style.css            # Base Styles, Theme Variables & Component Layouts
│   └── responsive.css       # Mobile, Tablet & Desktop Media Queries
├── js/
│   ├── components.js        # Logic for Search, Themes, Clock & LocalStorage
│   ├── animations.js        # Logic for Cursor, Preloader, Counters & Particles
│   └── main.js              # Configurations for Swiper.js Sliders & Footer
└── assets/
    ├── logo.png             # Transparent App Brand Logo
    ├── audio/
    │   └── bg-music.mp3     # Background Soundtrack File
    └── video/
        └── hero-bg.mp4      # Full-screen Hero Background Video
```
---

## 🛠️ Built With
HTML5: Semantic architecture for accessible and optimized SEO layouts.

CSS3: Custom properties (CSS variables), Flexbox, Grid layouts, and hardware-accelerated @keyframes animations.

Vanilla JavaScript (ES6+): Module-free programmatic rendering, Event Listeners, and LocalStorage manipulation.

Third-Party Ecosystem:

GSAP (GreenSock) - For seamless entrance transitions.

Particles.js - For interactive canvas backdrops.

Swiper.js - For premium mobile-friendly slider carousels.

Typed.js - For automated typographic effects.

AOS (Animate On Scroll) - For elegant element trigger reveals.

FontAwesome - For high-quality vector typography icons.

---

## ⚙️ Installation & Local Setup

# 1. Clone the Repository:

```bash
git clone [https://github.com/parsaBABALOO/CineFlow-Movie-Website.git](https://github.com/parsaBABALOO/CineFlow-Movie-Website.git)
```

# 2. Add Missing Media Assets:

Place a background audio file inside assets/audio/bg-music.mp3.

Place an ambient video clip inside assets/video/hero-bg.mp4.

Place your layout logo graphic inside assets/logo.png.

# 3. Run the Application:

Open index.html directly or launch via a local web server tool such as VS Code Live Server to ensure full capabilities.

---

## 📜 License

Engineered with passion in 2026. All rights reserved.

---
Developer: PARSA BABALOO




