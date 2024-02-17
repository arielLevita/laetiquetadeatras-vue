<script setup>
const emit = defineEmits(['searchTerm'])

const searchTerm = (e) => {
    emit('searchTerm', e.target.value)
}
</script>

<template>
    <div>
        <form class="d-flex align-self-center mb-2 flex-grow-1" role="search">
            <input
                class="form-control me-2 border-1 border-dark border-opacity-25"
                type="text"
                placeholder="Buscar producto o marca..."
                id="searchBox"
                @input="searchTerm"
            />
            <button class="btn shadow" type="button" id="btnSearch" aria-label="search">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                    />
                </svg>
            </button>
        </form>
    </div>
</template>
