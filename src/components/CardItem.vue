<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['product'])
</script>

<template>
    <div
        class="card d-flex flex-row shadow p-2"
        :id="'card' + props.product.id"
    >
        <div class="card-image rounded rounded-lg p-1 w-50 h-100">
            <img
                :src="props.product.imageFront"
                :alt="props.product.name"
                class="img-fluid rounded rounded-lg"
            />
        </div>
        <div class="px-2 w-50 d-flex flex-column justify-content-between">
            <div class="card-body p-1">
                <p class="card-title text-balance fw-medium m-0">{{ props.product.name }}</p>
            </div>
            <div class="card-bottom">
                <div class="p-0 mb-1">
                    <RouterLink :to="'../details/' + props.product.id" class="btn btn-sm shadow w-100"
                        >Detalles</RouterLink
                    >
                </div>
            </div>
        </div>
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

@media only screen and (max-width: 400px) {
    .card-title {
        font-size: smaller;
    }
}
</style>
