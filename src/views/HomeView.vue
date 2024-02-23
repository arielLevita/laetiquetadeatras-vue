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
let cardsToShow = ref(6)
let showFilters = ref(false)

onMounted(async () => {
    try {
        products.value = await productsArray
        textFiltered.value = [...products.value]
        categories.value = checkboxGenerator(products.value)
    } catch (error) {
        console.error('Error fetching products:', error)
    }
})

const slicedProducts = computed(() => filteredProducts.value.slice(0, cardsToShow.value))

const handleLoadMoreCards = () => {
    cardsToShow.value += 6
}

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
        <h1 class="text-center text-break my-5 py-4 px-4">{{ title }}</h1>

        <div class="container-fluid intro">
            <div class="wrapper">
                <div class="col-12 col-md-10 col-lg-8 mx-auto py-3 pt-md-4 pb-md-5">
                    <p class="px-md-4 m-0 text-dark text-pretty fs-md-5">
                        En este sitio vas a poder encontrar la información nutricional de productos
                        de supermercado directamente desde sus etiquetas con el propósito de
                        brindarte datos necesarios para tomar decisiones informadas sobre tu
                        alimentación. Explorá la plataforma y descubrí cómo podés mejorar tu
                        bienestar a través del conocimiento nutricional.
                    </p>
                </div>
            </div>
        </div>
    </header>

    <main>
        <section>
            <div class="slider container-fluid py-2 py-md-5 mb-3">
                <div class="wrapper">
                    <div class="px-2">
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
                                <p class="text-balance text-center fs-5">
                                    Filtrá productos por categoría
                                </p>
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
                                <p class="text-balance text-center fs-5">
                                    Hacé zoom sobre las etiquetas
                                </p>
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
                                <p class="text-balance text-center fs-5">
                                    Encontrá información sobre los productos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="wrapper">
                <div class="my-5 py-md-3 position-relative">
                    <SearchForm @searchTerm="handleSearch" />

                    <p class="d-none d-md-block m-0 mt-3">Filtrar por categoría:</p>
                    <button
                        class="d-flex align-items-center d-md-none ms-auto py-1 px-2 btn shadow border border-dark border-opacity-50"
                        @click="showFilters = !showFilters"
                    >
                        Filtrar por categoría
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            class="bi bi-filter ms-2"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                            />
                        </svg>
                    </button>
                    <form
                        v-if="showFilters"
                        action="#"
                        class="categorySelectors d-flex d-md-none flex-wrap position-absolute w-75 z-1 rounded rounded-2 shadow border border-dark border-opacity-50"
                    >
                        <div
                            class="d-flex flex-wrap justify-content-start align-items-center p-md-2 my-1 rounded rounded-lg w-100"
                        >
                            <CheckboxFilter
                                :products="products"
                                @categoryFilter="handleCheckboxFilter"
                            />
                        </div>
                    </form>
                    <form
                        action="#"
                        class="d-none d-md-flex flex-wrap"
                    >
                        <div
                            class="d-flex flex-wrap justify-content-start align-items-center p-md-2 rounded rounded-lg w-100"
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
                        v-if="filteredProducts.length > 0"
                        class="d-flex flex-wrap align-items-center justify-content-around row-gap-3"
                    >
                        <CardItem
                            v-for="product in slicedProducts"
                            :key="product.id"
                            :product="product"
                        />
                        <button
                            v-if="slicedProducts.length < filteredProducts.length"
                            @click="handleLoadMoreCards"
                            class="loadmore-btn btn border border-dark px-2 py-1"
                        >
                            Mostrar más
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                height="16"
                                width="16"
                                class="d-inline-block ms-1"
                            >
                                <path
                                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                />
                            </svg>
                        </button>
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

.categorySelectors {
    right: 0;
    top: 110%;
    background-color: var(--color-pastel-4);
}

.loadmore-btn:hover svg {
    transition: 100ms;
    fill: var(--color-pastel-4) !important;
}
</style>
