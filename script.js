// Parçacıkları Oluşturma
function generateParticles() {
    for (let i = 0; i < 30; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * window.innerWidth + "px";
        particle.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(particle);
    }
}

// Sayfa Yüklendiğinde Parçacıkları Başlat
window.onload = function () {
    generateParticles();
};