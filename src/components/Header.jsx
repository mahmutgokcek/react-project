import React from "react"

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Yemek.com</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Anasayfa</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Hakkımızda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">İletişim</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1">Profil</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header