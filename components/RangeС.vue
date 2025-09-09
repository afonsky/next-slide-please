<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Range } from 'vue-range-multi'
import 'vue-range-multi/style.css'


// A reactive model for the range slider
const val1 = ref(4)
const val2 = ref<number>(1.7)


function limitNumberWithinRange(num, min, max){
  const MIN = min ?? 1;
  const MAX = max ?? 7;
  const parsed = parseInt(num)
  return Math.min(Math.max(parsed, MIN), MAX)
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const c = computed(() => val1.value + val2.value )

</script>

<template>
  <!-- Passing props through, e.g., min, max -->

  <div class="grid grid-cols-[8fr_15fr] gap-1">
    <div>
        <span>Диапазон сенсора по Y (м): {{ Math.round(val1 * 100) / 100 }}</span>
    </div>
    <div>
    <Range 
      v-model="val1"
      class="w-1/3 py3"
      :min="0" 
      :max="30" 
      :step="0.1"
    />
    </div>
  </div>
<br>
  <div class="grid grid-cols-[8fr_15fr] gap-1">
    <div>
        <span>Диапазон сенсора по X (м): {{ Math.round(val2 * 100) / 100 }}</span>
    </div>
    <div>
    <Range 
      v-model="val2"
      class="w-1/3 py3"
      :min="0" 
      :max="10" 
      :step=0.1

    />
    </div>
  </div>
  <p>Стоимость сенсора: {{ Math.round(0.03*val2**1.5 *(val1**3.5 + 1000 * val1**2) + 10000) }} (Максимум: 100k)</p>
</template>