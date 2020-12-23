import React from "react"

function Banner() {
  return (

     <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
        />
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" />
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" />
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://picsum.photos/300/200"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://picsum.photos/300/201"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://picsum.photos/300/202"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  )
}

export default Banner