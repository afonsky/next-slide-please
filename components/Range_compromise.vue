<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Range } from 'vue-range-multi'
import 'vue-range-multi/style.css'


// A reactive model for the range slider
const val2 = ref(3.5)

</script>

<template>
  <div class="grid grid-cols-[5fr_10fr_5fr] gap-5">
    <div>
      <figure>
      <img src="/photo_2025-09-09_13-42-29.jpg" style="width: 180px, height: 180px !important">
      </figure>
    </div>
    <div>
    <br>
    <br>
    <br>
    <Range 
      v-model="val2"
      class="w-full py3"
      :min="0.1" 
      :max="30" 
      :step=0.1
      :thumbLimits="[0, 30]"

    />
    </div>
    <div>
    <figure>
    <img src="/photo_2025-09-09_13-07-08.jpg" style="width: 180px, height: 180px !important">
    </figure>
    </div>
  </div>
</template>