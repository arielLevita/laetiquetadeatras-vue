<script>
import { getProducts } from '../scripts/firebase.js'
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      products: []
    }
  },
  async created() {
    try {
      const querySnapshot = await getProducts()
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      this.products = products
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<template>
  <div class="d-flex flex-wrap align-items-center justify-content-around row-gap-3">
    <div
      v-if="products.length > 0"
      v-for="product in products"
      :key="product.id"
      class="card d-flex flex-row shadow p-2"
      :id="'card' + product.id"
    >
      <div class="card-image rounded rounded-lg p-1 w-50 h-100">
        <img :src="product.imageFront" :alt="product.name" class="img-fluid rounded rounded-lg" />
      </div>
      <div class="px-2 w-50 d-flex flex-column justify-content-between">
        <div class="card-body p-1">
          <p class="card-title text-balance fw-medium m-0">{{ product.name }}</p>
        </div>
        <div class="card-bottom">
          <div class="p-0 mb-1">
            <RouterLink :to="'../details/' + product.id" class="btn btn-sm shadow w-100"
            >Detalles</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
    <h3 v-else class="display-1 fw-bolder text-center">No se han encontrado productos que coincidan con la búsqueda.</h3>
  </div>
</template>

<style scope>
.card {
  width: 25rem;
  /* height: 13rem; */
  background-color: var(--color-pastel-4);
}

.card-image > img {
  max-height: 100%;
  aspect-ratio: 1 / 1;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.btn {
  background-color: var(--color-pastel-2);
  color: #212529;
}

.btn:hover {
  background-color: var(--color-logo) !important;
  color: var(--color-pastel-4) !important;
}

@media only screen and (max-width:400px) {
  .card-title {
    font-size: smaller;
  }
}
</style>
