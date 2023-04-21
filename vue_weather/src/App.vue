<script setup>
import { reactive } from 'vue';
import axios from 'axios';

const weather = reactive({
  city: '',
  info: null,
})

const submit = () => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weather.city}&units=metric&appid=2f9f72a445ee8c378074c7357542c65b`)
    .then(res => (weather.info = res));
}
</script>

<template>
  <div class="wrapper">
    <img class="weather__img_1" src="./assets/img/clouds1.png">
    <img class="weather__img_2" src="./assets/img/clouds2.png">
    <div class="weather__body">
      <h1>Погодное приложение</h1>
      <h4 class="text-center">Узнать погоду в городе {{ weather.city }}</h4>
      <form @submit.prevent.stop="submit" class="weather__form">
        <VInput v-model="weather.city" placeholder="Введите город" />
        <VButton v-if="weather.city != ''">Проверить погоду</VButton>
        <VButton disabled v-else>Введите город</VButton>
      </form>
      <p v-if="weather.info != null"> Температура: {{ weather.info.data.main.temp }} </p>
      <p v-if="weather.info != null"> Ощущается как: {{ weather.info.data.main.feels_like }} </p>
      <p v-if="weather.info != null"> Минимальная температура: {{ weather.info.data.main.temp_min }} </p>
      <p v-if="weather.info != null"> Максимальная температура: {{ weather.info.data.main.temp_max }} </p>
      <p v-if="weather.info != null"> Скорость ветра: {{ weather.info.data.wind.speed }} м/с </p>
    </div>

  </div>
</template>

<style scoped></style>
