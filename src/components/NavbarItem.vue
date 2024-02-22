<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark m-0 p-2">
    <div class="wrapper d-flex justify-content-between align-items-center w-100">
      <RouterLink to="/" class="navbar-brand align-self-start">
        <img src="/nutritional_claro.png" alt="la etiqueta de atrás logo" />
        <p class="d-none d-sm-inline-flex fs-small border-start border-light p-2 m-0">
          LA ETIQUETA DE ATRÁS
        </p>
      </RouterLink>
      <div class="text-end">
        <button
          class="navbar-toggler my-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav me-auto m-md-0 pt-3 pt-md-0 gap-4">
            <li class="nav-item">
                <RouterLink to="/" class="nav-link fw-semibold fs-small text-light p-0 text-uppercase">Inicio</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/contact" class="nav-link fw-semibold fs-small text-light p-0 text-uppercase">Contacto</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--color-logo);
}

img {
  max-height: 2.5rem;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.nav-item {
  position: relative;
}

.nav-item::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--color-pastel-2), var(--color-pastel-4));
  bottom: -5px;
  left: 0;
  transform: scaleX(0);
  transition: transform 300ms ease-in-out;
  -webkit-transition: transform 300ms ease-in-out;
  -moz-transition: transform 300ms ease-in-out;
  -ms-transition: transform 300ms ease-in-out;
  -o-transition: transform 300ms ease-in-out;
  -webkit-transform: scaleX(0);
  -moz-transform: scaleX(0);
  -ms-transform: scaleX(0);
  -o-transform: scaleX(0);
}

.nav-item:hover::before {
  transform: scaleX(1);
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
}
</style>
