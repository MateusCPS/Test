var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");

var btnTrailer1 = document.getElementById("btnTrailer1");
var btnTrailer2 = document.getElementById("btnTrailer2");
var btnTrailer3 = document.getElementById("btnTrailer3");

var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");

async function traduzirTexto(texto, targetLang = "pt") {
  const apiKey = "AIzaSyAUCp6EsuJcklXrq-1xsf1LaWGQXaETmzU";
  const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: texto,
      target: targetLang,
    }),
  });
  const data = await response.json();
  return data.data.translations[0].translatedText;
}

async function buscarAnime(id) {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const data = await response.json();
  
  const sinopse = await traduzirTexto(data.data.synopsis);

  document.getElementById("anime-info").innerHTML = `
    <h2>${data.data.title}</h2>
    <img src="${data.data.images.jpg.image_url}" alt="${data.data.title}" style="max-width: 300px;">
    <p>${sinopse}</p>
    <p><strong>Episódios:</strong> ${data.data.episodes}</p>
    <p><strong>Classificação:</strong> ${data.data.score}</p>
  `;
}

buscarAnime(5114); 


btnTrailer1.onclick = function() {
  modal1.style.display = "block";
}

btnTrailer2.onclick = function() {
  modal2.style.display = "block";
}

btnTrailer3.onclick = function() {
  modal3.style.display = "block";
}

close1.onclick = function() {
  modal1.style.display = "none";
}

close2.onclick = function() {
  modal2.style.display = "none";
}

close3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
  document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  });



  