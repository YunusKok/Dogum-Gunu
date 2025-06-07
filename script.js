// Giriş ekranından kutlama ekranına geçiş ve özel mesaj
function startCelebration() {
  const userName = document.getElementById("nameInput").value.trim();
  if (userName === "") {
    alert("Lütfen adını gir!");
    return;
  }

  // Giriş ekranını gizle, kutlama ekranını göster
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("celebration-screen").style.display = "block";

  // Kutlama modundayken canvas etkileşimine izin ver
  document.getElementById("fireworkCanvas").style.pointerEvents = "auto";

  // Özel isimler için farklı mesajlar ayarla
  if (userName.toLowerCase() === "fatma") {
    document.getElementById("personalMessage").innerHTML = ".";
    document.getElementById("specialMessage").innerText = ".";
  } else if (userName.toLowerCase() === "mutlu") {
    document.getElementById("personalMessage").innerHTML = "🎉 Doğum Günün Kutlu Olsun, Mutlu Abi!";
    document.getElementById("specialMessage").innerHTML = 
      `Bugün, hayatının yeni bir yaşına adım attığın gün. Ama sadece takvimde ilerleyen bir sayı değil, yaşadığın her anın, kattığın her değerin ve dokunduğun her kalbin bir yansıması bu yeni yaş. Senin varlığın, çevrendeki insanlara güç, güven ve huzur veren bir ışık gibi.<br><br>
      Seninle paylaşılan her sohbet, her kahkaha, her öğüt zihnimde unutulmaz anılar bırakıyor. Zaman zaman yollar değişse de, senin kattığın değer hep kalıcı. En zor zamanlarda bile duruşun, fedakârlığın ve yüreğinle etrafındakilere umut oluyorsun.<br><br>
      Bu yeni yaşında, hayat sana en güzel anları, en içten mutlulukları ve en değerli dostlukları sunsun. Her anını hak ettiğin sevgi ve huzurla doldur. Senin gibi güzel kalpli birinin hayatı da hep güzelliklerle dolsun!<br><br>
      İyi ki varsın, iyi ki doğdun. Nice mutlu, sağlıklı ve huzur dolu yıllara!`;
  } else {
    document.getElementById("personalMessage").innerText = "İyi ki buradasın, " + userName + "! 🎉";
    document.getElementById("specialMessage").innerText = "Hayatın en güzel anlarını yaşamanı diliyorum!";
  }

  // Havai fişek efektlerini başlat
  triggerFireworks();
}

// Havai fişek ve parçacık efektlerini oluşturma
function triggerFireworks() {
  const canvas = document.getElementById("fireworkCanvas");
  const ctx = canvas.getContext("2d");

  // Canvas boyutunu pencere boyutuna ayarla
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  // Belirtilen koordinatlarda parçacıklar oluşturur
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

  // Parçacıkları güncelle ve çiz
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

  // Canvas üzerine tıklama ile parçacık oluştur (havai fişek etkisi)
  canvas.addEventListener("click", (event) => {
    createParticles(event.clientX, event.clientY);
  });

  // Orta noktadan başlangıç partiküllerini tetikle
  createParticles(canvas.width / 2, canvas.height / 2);
  updateParticles();
}

// Rastgele renk üretme fonksiyonu
function getRandomColor() {
  const colors = ["#ff4757", "#ff6b6b", "#ffa502", "#2ed573", "#1e90ff", "#3742fa"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Havai fişeğe tıklanınca özel mesajı gösterir
function showSpecialMessage() {
  document.getElementById("specialMessage").style.display = "block";
}