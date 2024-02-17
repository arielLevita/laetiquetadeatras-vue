<script setup>
import { ref, onMounted, computed } from 'vue'
import { productsArray } from '../scripts/firebase.js'
import { checkboxGenerator } from '@/scripts/smallScripts'
import SearchForm from '@/components/SearchForm.vue'
import CheckboxFilter from '@/components/CheckboxFilter.vue'
import CardItem from '@/components/CardItem.vue'
import ToTopButton from '@/components/ToTopButton.vue'

const title = 'La Etiqueta de Atrás'
let products = ref([])
let categories = ref([])
let searchFilter = ref('')
let checkboxFilter = ref([])
let textFiltered = ref([])

onMounted(async () => {
    try {
        products.value = await productsArray
        textFiltered.value = [...products.value]
        categories.value = checkboxGenerator(products.value)
    } catch (error) {
        console.error('Error fetching products:', error)
    }
})

const filteredProducts = computed(() => {
    let productsList = products.value

    if (checkboxFilter.value.length) {
        productsList = productsList.filter((product) =>
            checkboxFilter.value.includes(product.category)
        )
    }

    if (searchFilter.value.length > 0) {
        productsList = productsList.filter(
            (product) =>
                product.name.toLowerCase().includes(searchFilter.value.toLowerCase()) ||
                product.brand.toLowerCase().includes(searchFilter.value.toLowerCase())
        )
    }
    return productsList
})

const handleSearch = (searchTerm) => {
    searchFilter.value = searchTerm
}

const handleCheckboxFilter = (categoryFilter) => {
    if (checkboxFilter && checkboxFilter.value) {
        if (checkboxFilter.value.includes(categoryFilter)) {
            const index = checkboxFilter.value.indexOf(categoryFilter)
            if (index !== -1) {
                checkboxFilter.value.splice(index, 1)
            }
        } else {
            checkboxFilter.value.push(categoryFilter)
        }
    }
}
</script>

<template>
    <header>
        <ToTopButton />
        <h1 class="text-center my-5 py-4">{{ title }}</h1>

        <div class="container-fluid intro">
            <div class="wrapper">
                <div class="col-12 col-md-10 col-lg-8 mx-auto py-3 pt-md-4 pb-md-5">
                    <p class="px-md-4 m-0 text-dark fs-5">
                        En este sitio vas a poder encontrar la información nutricional de productos de supermercado directamente desde sus etiquetas con el propósito de brindarte datos necesarios para tomar decisiones informadas sobre tu alimentación. Explorá la plataforma y descubrí cómo podés mejorar tu bienestar a través del conocimiento nutricional.
                    </p>
                </div>
            </div>
        </div>
    </header>

    <main>
        <section>
            <div class="slider container-fluid py-2 py-md-5 mb-3">
                <div class="wrapper">
                    <div class="px-md-2">
                        <div
                            class="d-flex flex-column flex-md-row justify-content-center align-items-center align-items-sm-center flex-wrap pt-5"
                        >
                            <div class="p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    fill="currentColor"
                                    class="bi bi-funnel w-100 mb-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"
                                    />
                                </svg>
                                <p class="text-balance mx-auto fs-5 ps-4">Filtrá productos por categoría</p>
                            </div>
                            <div class="p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    fill="currentColor"
                                    class="bi bi-zoom-in w-100 mb-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                                    />
                                    <path
                                        d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
                                    />
                                </svg>
                                <p class="text-balance mx-auto fs-5 ps-4">Hacé zoom sobre las etiquetas</p>
                            </div>
                            <div class="p-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    fill="currentColor"
                                    class="bi bi-info-circle w-100 mb-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                                    />
                                    <path
                                        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                                    />
                                </svg>
                                <p class="text-balance mx-auto fs-5">Encontrá información sobre los productos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="wrapper">
                <div class="my-5 py-md-3">
                    <SearchForm @searchTerm="handleSearch" />

                    <p class="m-0 py-2">Filtrar por categoría:</p>
                    <form action="#" class="d-flex flex-wrap" id="categorySelectors">
                        <div
                            class="d-flex flex-wrap justify-content-start align-items-center p-2 my-1 rounded rounded-lg w-100"
                        >
                            <CheckboxFilter
                                :products="products"
                                @categoryFilter="handleCheckboxFilter"
                            />
                        </div>
                    </form>
                </div>

                <div class="py-md-3">
                    <div
                        v-if="products.length > 0"
                        class="d-flex flex-wrap align-items-center justify-content-around row-gap-3"
                    >
                        <CardItem
                            v-for="product in filteredProducts"
                            :key="product.id"
                            :product="product"
                        />
                    </div>
                    <h3 v-else class="display-1 fw-bolder text-center">
                        No se han encontrado productos que coincidan con la búsqueda.
                    </h3>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
h1 {
    font-size: clamp(2rem, 2rem + 1.75vw, 5rem);
}

.intro {
    text-wrap: pretty;
}
.slider {
    background-color: var(--color-pastel-2);
    text-shadow: -3px -1px 4px var(--color-pastel-4);
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
}

.slider p {
    width: 220px;
}
</style>
