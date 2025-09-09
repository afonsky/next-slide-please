<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Range } from 'vue-range-multi'
import 'vue-range-multi/style.css'


// A reactive model for the range slider
const val1 = ref(4)
const val2 = ref<number>(5.7)
const val3 = ref<number>(0)
const val4 = ref<number>(1.0)
const val5 = ref<number>(10.6)
const val6 = ref<number>(35.3)
const val7 = ref<number>(51.0)

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const c = computed(() => val1.value + val2.value )

</script>

<template>
  <!-- Passing props through, e.g., min, max -->

  <div class="grid grid-cols-[32fr_1fr] gap-1">
  <div>
  <div class="grid grid-cols-[9fr_15fr] gap-1">
    <div>
        <span>Количество сенсоров: {{ val1 }}</span>
    </div>
    <div>
    <Range 
      v-model="val1"
      class="w-1/3 py3"
      :min="1" 
      :max="10" 
      :step="1"
    />
    </div>
  </div>
<br>

<div class="grid grid-cols-[9fr_15fr] gap-1">
    <div>
        <span>Тип сенсора: {{ val3 }}</span>
    </div>
    <div>
    <Range 
      v-model="val3"
      class="w-1/3 py3"
      :min="0" 
      :max="2" 
      :step="1"
    />
    </div>
  </div>
<br>

  <div class="grid grid-cols-[9fr_15fr] gap-1">
    <div>
        <span>Диапазон сенсора №1 по Y (м): {{ Math.round(val2 * 100) / 100 }}</span>
    </div>
    <div>
    <Range 
      v-model="val2"
      class="w-1/3 py3"
      :min="0.1" 
      :max="30" 
      :step=0.1

    />
    <br>
    </div>
        <div>
        <span>Диапазон сенсора №2 по X (м): {{ Math.round(val4 * 100) / 100 }}</span>
    </div>
    <div>
    <Range 
      v-model="val4"
      class="w-1/3 py3"
      :min="0.1" 
      :max="10" 
      :step=0.1

    />
    </div>
  </div>
<br>

<div class="grid grid-cols-[9fr_15fr] gap-1">
    <div>
        <span>Расположение сенсора №1 (шир.): {{ Math.round(val5 * 100) / 100 }}</span>
    </div>
    <div>
    <Range 
      v-model="val5"
      class="w-1/3 py3"
      :min="0" 
      :max="90" 
      :step="0.1"
    />
    </div>
  </div>
<br>

<div class="grid grid-cols-[9fr_15fr] gap-1">
    <div>
        <span>Расположение сенсора №2 (долг.): {{ Math.round(val6 * 100) / 100 }}</span>
    </div>
    <div>
    <Range 
      v-model="val6"
      class="w-1/3 py3"
      :min="0" 
      :max="90" 
      :step="0.1"
    />
    </div>
  </div>
<br>

<div class="grid grid-cols-[9fr_15fr] gap-1">
    <div>
        <span>Рабочая температура (℃): {{ Math.round(val7 * 100) / 100 }}</span>
    </div>
    <div>
    <Range 
      v-model="val7"
      class="w-1/3 py3"
      :min="-20" 
      :max="100" 
      :step="0.1"
    />
    </div>
  </div>
<br>

</div>


<div>
<br>

</div>
</div>
  <p>Общая стоимость: {{ Math.round((val3+1)*0.03*val2**1.5*(val1**3.5 + 1000 * val1**3 + 100*val4 + 50*val5 - 30*val6 + 270*val7) + 10000) }} (Максимум: 100k)</p><br>
  <p>Качество (эффективность): {{ 1 - (1000 / ((val3+1)*0.03*val2**1.5*(val1**3.5 + 1000 * val1**3 - 0.8*val4 + 50*val5 - 30*val6 + 270*val7) + 10000) - 100 / ((val3+1)*0.03*val2**1.5*(val1**3.5 + 1000 * val1**3 - 0.8*val4 + 50*val5 - 30*val6 + 270*val7) + 10000)**2).toFixed(3)}}</p>
</template>