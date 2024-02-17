<script>
import { productsArray } from '../scripts/firebase.js'
import VueMagnifier from '@websitebeaver/vue-magnifier'
import '@websitebeaver/vue-magnifier/styles.css'
export default {
    data() {
        return {
            product: null
        }
    },
    components: {
        VueMagnifier
    },
    async created() {
        try {
            
            const detailId = this.$route.params.id
            const products = await productsArray
            this.product = products.find((product) => product.id == detailId)
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<template>
    <div class="min-vh-100">
        <div v-if="product" class="details-card container row p-3 my-3 mx-auto grid gap-3">
            <div class="col-lg-8 p-0 details-image-container border border-dark">
                <VueMagnifier 
                :src="product.imageBack"
                alt="Product Image"
                class="w-100 d-block"
                />
                <span>Pase el cursor para agrandar</span>
            </div>
        <div class="col p-3 details-data bg-light">
            <div>
                <h3 class="text-center p-3">{{ product.name }}</h3>
                <ul>
                    <li class="pt-2"><span>Marca:</span> {{ product.brand }}</li>
                    <li class="pt-2"><span>Producto:</span> {{ product.name }}</li>
                    <li class="pt-2"><span>Categoría:</span> {{ product.category }}</li>
                    <li class="pt-2">
                        <span>Tamaño de la porción:</span> {{ product.servingSize }}
                    </li>
                </ul>
            </div>
            <div class="d-flex justify-content-center">
                <button @click="goBack" class="btn btn-outline-dark w-100 shadow m-2">
                    Volver
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<style scope>
.details-card {
    border: 1px solid rgba(0, 0, 0, 0.125);
    background-color: var(--color-pastel-3);
}

.details-image-container {
    box-shadow: -4px -4px 6px #888888;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    position: relative;
    box-sizing: inherit;
}

/* .details-image-container:hover {
    cursor: zoom-in;
} */

.details-image-container span {
    z-index: 5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    display: block;
    padding: 0.5rem 1rem;
    font-family: sans-serif;
    font-weight: bold;
    color: var(--color-pastel-4);
    text-align: center;
}

.details-image-container:hover span {
    display: none;
}

.details-data {
    border: 1px solid rgba(0, 0, 0, 0.125);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.details-data ul {
    list-style-type: none;
    list-style-position: inside;
}

.details-data li > span {
    font-weight: bold;
}

@media (hover: none) {
    .details-image-container span {
        display: none;
    }
}
</style>
