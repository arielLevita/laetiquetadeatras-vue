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
  <div class="d-flex flex-wrap align-items-center justify-content-between row-gap-3">
    <div
      v-if="products.length > 0"
      v-for="product in products"
      :key="product.id"
      class="card shadow px-3 py-2"
      :id="'card' + product.id"
    >
      <div class="card-image rounded rounded-lg">
        <img :src="product.imageFront" :alt="product.name" class="img-fluid rounded rounded-lg" />
      </div>
      <div class="card-body">
        <p class="card-title text-balance fw-medium">{{ product.name }}</p>
      </div>
      <div class="row card-bottom d-flex align-items-bottom my-2 mx-1">
        <div class="col btn-details shadow p-0">
          <RouterLink :to="'../details/' + product.id" class="btn btn-sm w-100"
            >Detalles</RouterLink
          >
        </div>
      </div>
    </div>
    <h3 v-else class="display-1 fw-bolder text-center">No se han encontrado productos que coincidan con la búsqueda.</h3>
  </div>
</template>

<style scope>
.card {
  width: 14rem;
  height: 25rem;
  background-color: var(--color-pastel-4);
}

img {
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
</style>
