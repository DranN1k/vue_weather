<script setup>
</script>

<template>
    <button type="submit" class="btn btn-primary weather__btn">
        <slot />
    </button>
</template>

<style scoped>
.weather__btn {
    min-width: 190px;
    margin-left: 10px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
}
</style>
