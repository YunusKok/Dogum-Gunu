// Kullanıcı adını al ve kutlamayı başlat
function startCelebration() {
    let userName = document.getElementById("nameInput").value.trim();
    if (userName === "") {
        alert("Lütfen adını gir!");
        return;
    }
    
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("celebration-screen").style.display = "block";
    
    if (userName.toLowerCase() === "fatma") {
        document.getElementById("personalMessage").innerHTML = "❤️ Seni Seviyorum, Fatma! ❤️";
        document.getElementById("specialMessage").innerText = "Senin varlığın bu dünyayı daha güzel yapıyor! 🌸";
    } else {
        document.getElementById("personalMessage").innerText = "İyi ki buradasın, " + userName + "! 🎉";
        document.getElementById("specialMessage").innerText = "Hayatın en güzel anlarını yaşamanı diliyorum!";
    }
    
    triggerFireworks();
}

// Havai fişek efektini başlat
function triggerFireworks() {
    const canvas = document.getElementById("fireworkCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    function createParticles(x, y) {
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: x,
                y: y,
                size: Math.random() * 5 + 2,
                color: getRandomColor(),
                velocityX: (Math.random() - 0.5) * 5,
                velocityY: (Math.random() - 0.5) * 5,
                life: 100
            });
        }
    }

    function updateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle, index) => {
            particle.x += particle.velocityX;
            particle.y += particle.velocityY;
            particle.life--;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();

            if (particle.life <= 0) {
                particles.splice(index, 1);
            }
        });

        requestAnimationFrame(updateParticles);
    }

    canvas.addEventListener("click", (event) => {
        createParticles(event.clientX, event.clientY);
    });

    updateParticles();
}

// Rastgele renk üretme fonksiyonu
function getRandomColor() {
    let colors = ["#ff4757", "#ff6b6b", "#ffa502", "#2ed573", "#1e90ff", "#3742fa"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Havai fişeğe tıklanınca özel mesaj göster
function showSpecialMessage() {
    document.getElementById("specialMessage").style.display = "block";
}