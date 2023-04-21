<script setup>

</script>

<template>
    <img class="weather__img_1" src="../../assets/img/clouds1.png">
    <img class="weather__img_2" src="../../assets/img/clouds2.png">
</template>

<style scoped>
.weather__img_1 {
    position: fixed;
    width: 600px;
    height: 300px;
    top: 0;
    z-index: 1;
    animation: 40s infinite fly;
}

.weather__img_2 {
    position: fixed;
    width: 600px;
    height: 300px;
    top: 100px;
    z-index: 1;
    animation: 46s infinite fly;
}

@keyframes fly {
    from {
        left: -600px;
    }

    to {
        left: 100%;

    }
}
</style>
