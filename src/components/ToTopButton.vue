<script setup>
import { ref, onMounted } from 'vue'

const toTopVisible = ref(false)

onMounted(() => {
    window.addEventListener('scroll', () => {
        toTopVisible.value = window.scrollY > 0
    })
})
</script>

<template>
    <div>
        <a href="#">
            <button type="button" class="btn" aria-label="to top button" id="toTopButton" :class="{ visible: toTopVisible }">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                >
                    <path
                        d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"
                    />
                </svg>
            </button>
        </a>
    </div>
</template>

<style scoped>
#toTopButton {
    position: fixed;
    bottom: 2rem;
    right: 1rem;
    transform: scale(1.2);
    background-color: var(--color-pastel-2);
    color: #212529;
    padding: 0.3rem 0.5rem 0.4rem 0.5rem;
    border: 1px solid var(--color-logo);
    opacity: 0;
    transition: opacity 1s;
    z-index: 2;
}

#toTopButton:hover {
    transform: scale(1.3);
    -webkit-transform: scale(1.3);
    -moz-transform: scale(1.3);
    -ms-transform: scale(1.3);
    -o-transform: scale(1.3);
}

#toTopButton.visible {
    opacity: 1;
}
</style>
