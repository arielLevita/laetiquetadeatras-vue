<script setup>
import { computed } from 'vue'

const emit = defineEmits(['categoryFilter'])

const props = defineProps({
    products: {
        type: Array,
        required: true
    }
})

const categories = computed(() => {
    return [...new Set(props.products.map((product) => product.category))]
})

const categoryFilter = (e) => {
    emit('categoryFilter', e.target.value)
}
</script>

<template>
    <div
        v-for="category in categories"
        :key="category"
        class="category-selector d-inline-flex align-items-center m-1 px-2 py-1"
    >
        <input
            class="form-check-input mx-2 my-0 border border-dark border-opacity-50"
            type="checkbox"
            role="switch"
            :id="`category_${category}`"
            :value="category"
            @change="categoryFilter"
        />
        <label :for="`category_${category}`" class="me-2">{{ category }}</label>
    </div>
</template>

<style scope>
.form-check-input:focus {
    border-color: rgba(0, 0, 0, 0.25);
    box-shadow: none;
}

.form-check-input:checked {
    border-color: rgba(0, 0, 0, 0.25);
    background-color: var(--color-logo);
}

@media screen and (width <= 768px) {
    .category-selector {
        width: 100%;
    }
}
</style>
