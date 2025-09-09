<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Range } from 'vue-range-multi'
import 'vue-range-multi/style.css'


// A reactive model for the range slider
const val2 = ref(3.5)

</script>

<template>
  <div class="grid grid-cols-[6fr_15fr] gap-1">
    <div>
        <span>Диапазон сенсора (м): {{ Math.round(val2 * 100) / 100 }}</span>
    </div>
    <div>
    <Range 
      v-model="val2"
      class="w-1/3 py3"
      :min="0.1" 
      :max="30" 
      :step=0.1
      :thumbLimits="[0, 30]"

    />
    </div>
  </div>
</template>