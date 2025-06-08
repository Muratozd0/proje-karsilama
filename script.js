function saatiGuncelle() {
  const simdi = new Date();
  const saat = simdi.getHours().toString().padStart(2, '0');
  const dakika = simdi.getMinutes().toString().padStart(2, '0');
  const saniye = simdi.getSeconds().toString().padStart(2, '0');
  document.getElementById("saat").innerText = `${saat}:${dakika}:${saniye}`;
}

setInterval(saatiGuncelle, 1000);
saatiGuncelle();

function karsila() {
  const kullaniciAdi = document.getElementById("isim").value;
  const mesaj = `Hoş geldin, ${kullaniciAdi || "ziyaretçi"}!`;
  document.getElementById("mesaj").innerText = mesaj;
}

function arkaPlaniDegistir() {
  const renkler = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF", "#A0C4FF", "#BDB2FF", "#FFC6FF"];
  const rastgele = Math.floor(Math.random() * renkler.length);
  document.body.style.backgroundColor = renkler[rastgele];
}