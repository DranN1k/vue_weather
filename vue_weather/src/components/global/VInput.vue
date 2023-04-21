<script setup>
import { defineEmits, defineProps, watch, ref } from 'vue';

const emits = defineEmits(['update:modelValue']);

const { modelValue } = defineProps({
    modelValue: String,
    placeholder: String,
});

const value = ref(modelValue);

watch(value, () => {
    emits('update:modelValue', value)
})

</script>

<template>
    <input v-model="value" :placeholder="placeholder" class="form-control input__city" type="text">
</template>

<style scoped>
.input__city {
    background-color: rgb(209, 213, 226);
    font-weight: 600;
    text-transform: uppercase;
}
</style>
