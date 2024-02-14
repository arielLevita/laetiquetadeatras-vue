<script setup>
const props = defineProps(['category'])
</script>
<template>
    <div class="category-selector d-inline-flex align-items-center m-1 px-2 py-1 rounded">
        <input
            class="form-check-input mx-2 my-0"
            type="checkbox"
            role="switch"
            id={{props.category}}
            value={{props.category}}
        />
        <label for={{props.category}}>{{ props.category }}</label>
    </div>
</template>

<style scope>
.category-selector {
    border: 1px solid rgba(0, 0, 0, 0.25);
}

.form-check-input {
    margin: 0 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
}

.form-check-input:focus {
    border-color: rgba(0, 0, 0, 0.25);
    box-shadow: none;
}

.form-check-input:checked {
    border-color: rgba(0, 0, 0, 0.25);
    background-color: var(--color-logo);
}
</style>
