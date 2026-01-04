/* ===== SCROLL REVEAL ===== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ===== THEME TOGGLE ===== */
const toggle = document.getElementById("themeToggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light");
    });
}


/* ===== PARALLAX EFFECT ===== */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".parallax").forEach(el => {
        el.style.transform = `translateY(${window.scrollY * 0.08}px)`;
    });
});


/* ===== PARTICLE BACKGROUND ===== */
const canvas = document.getElementById("particles");

if (canvas) {
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 70 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
    }));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.fillStyle = "#00e5ff";
            ctx.fillRect(p.x, p.y, 2, 2);
        });

        requestAnimationFrame(animate);
    }
    animate();
}

/* ===== PROFILE POPUP (HOME ONLY) ===== */
window.addEventListener("load", () => {
    const popup = document.getElementById("profile-popup");
    const closeBtn = document.getElementById("close-popup");
    const heroAvatar = document.getElementById("hero-avatar");

    if (popup) {
        setTimeout(() => {
            popup.classList.add("show");
        }, 1000);

        const closePopup = () => {
            popup.classList.remove("show");
            if (heroAvatar) heroAvatar.classList.add("show");
        };

        closeBtn.onclick = closePopup;

        popup.onclick = (e) => {
            if (e.target === popup) closePopup();
        };
    }
});

