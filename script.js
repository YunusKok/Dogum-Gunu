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
    } else {
        document.getElementById("personalMessage").innerText = "İyi ki doğdun, " + userName + "! 🎉";
    }
    
    triggerFireworks();
}

function triggerFireworks() {
    for (let i = 0; i < 30; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = "50%";
        particle.style.top = "50%";
        particle.style.backgroundColor = getRandomColor();
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 2000);
    }
}

function getRandomColor() {
    let colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function showBirthdayMessage() {
    document.getElementById("birthdayMessage").style.display = "block";
    document.getElementById("birthdayMessage").innerText = "Senin için özel bir gün! Hayatının en güzel anlarını yaşamanı diliyorum!";
}