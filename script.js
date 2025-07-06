function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // mantém sempre a foto do Pedro
  img.setAttribute("src", "./assets/fotopedro.jpeg")
}
