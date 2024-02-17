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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24"><path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"/></svg>
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
