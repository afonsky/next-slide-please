// CircleSectorInput.vue

<template>
  <div class="grid grid-cols-2 gap-2 items-center">
    <!-- Left column: slider and value -->
    <div style="display: flex; flex-direction: column; align-items: center;">
      <br>
      <br>
      <br>
      <br>
      <br>

      <Range 
        v-model="radius"
        style="width: 220px; margin-bottom: 8px;"
        :min="0.1" 
        :max="100" 
        :step="0.1"
        :thumbLimits="[0, 100]"
      />
      <span style="margin-top: 8px;">Диапазон сенсора по Y (м): {{ Math.round(radius * 10) / 100 }}</span>
      <br>
      <br>
      <Range 
        v-model="angle"
        style="width: 220px; margin-bottom: 8px;"
        :min="0.1" 
        :max="100" 
        :step="0.1"
        :thumbLimits="[0, 100]"
      />
      <span style="margin-top: 8px;">Диапазон сенсора по X (м): {{ Math.round(angle * 10) / 100 }}</span>
      <br>
      <br>
    </div>
    <!-- Right column: SVG drawing -->
    <div style="display: flex; flex-direction: column; align-items: center;">
      <svg :width="svgSize" :height="svgSize" style="margin-top: 0px;">
        <path :d="sectorPath" fill="lightgreen" stroke="green" stroke-width="4"/>
        <rect
          :x="(svgSize/2) - 16"
          :y="(svgSize/2) - 20"
          width="32"
          height="32"
          fill="orange"
          stroke="brown"
          stroke-width="4"
          rx="6"
        />
        <!-- Draw axis origin and arrows on left from the rectangle -->
        <!-- Axis origin and arrows on left from the rectangle -->
        <circle
          :cx="(svgSize/2) - 120"
          :cy="(svgSize/2) + 80"
          r="3"
          fill="gray"
        />
        <!-- X axis arrow (right, length doubled, arrowhead half size) -->
        <line
          :x1="(svgSize/2) - 120"
          :y1="(svgSize/2) + 80"
          :x2="(svgSize/2) - 60"
          :y2="(svgSize/2) + 80"
          stroke="gray"
          stroke-width="1.5"
          marker-end="url(#arrowheadSmall)"
        />
        <!-- Y axis arrow (downward, length doubled, arrowhead half size) -->
        <line
          :x1="(svgSize/2) - 120"
          :y1="(svgSize/2) + 80"
          :x2="(svgSize/2) - 120"
          :y2="(svgSize/2) + 160"
          stroke="gray"
          stroke-width="1.5"
          marker-end="url(#arrowheadSmall)"
        />
        <!-- Arrowhead marker definition (half size) -->
        <defs>
          <marker id="arrowheadSmall" markerWidth="5" markerHeight="3.5" refX="3.5" refY="1.75" orient="auto" markerUnits="strokeWidth">
            <polygon points="0 0, 5 1.75, 0 3.5" fill="gray"/>
          </marker>
        </defs>
        <!-- Axis labels -->
        <text
          :x="(svgSize/2) - 55"
          :y="(svgSize/2) + 75"
          font-size="6"
          fill="gray"
        >X</text>
        <text
          :x="(svgSize/2) - 142"
          :y="(svgSize/2) + 175"
          font-size="6"
          fill="gray"
        >Y</text>
        <text
          v-if="sectorReachesEmoji"
          :x="svgSize/2"
          :y="(svgSize/2) - 1"
          text-anchor="middle"
          font-size="5"
          alignment-baseline="middle"
        >❗</text>
        <line
          :x1="(svgSize/2) - 114"
          :y1="(svgSize/2) + 16"
          :x2="(svgSize/2) + 114"
          :y2="(svgSize/2) + 16"
          stroke="gray"
          stroke-width="4"
        />
      </svg>
      <div style="margin-top: -94px; margin-left: 108px;
      font-size: 4rem; transform: rotate(30deg)">🏆</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Range } from 'vue-range-multi'
import 'vue-range-multi/style.css'


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

const radius = ref(30)
const angle = ref(20)
const svgSize = 400 // Doubled SVG size

// Trophy position (centered horizontally, below sector)
const trophyY = svgSize / 2 + 180 // adjust based on margin-top and svgSize
const trophyX = svgSize / 2 + 108 // margin-left

function polarToCartesian(cx, cy, r, deg) {
  const rad = (deg + 90) * Math.PI / 180
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad)
  }
}

const sectorPath = computed(() => {
  const cx = svgSize / 2
  const cy = svgSize / 2
  const startAngle = 0 - angle.value / 2
  const endAngle = 0 + angle.value / 2
  const start = polarToCartesian(cx, cy, radius.value * 2, startAngle)
  const end = polarToCartesian(cx, cy, radius.value * 2, endAngle)
  const largeArcFlag = angle.value > 180 ? 1 : 0
  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${radius.value * 2} ${radius.value * 2} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
    'Z'
  ].join(' ')
})

const sectorReachesEmoji = computed(() => {
  const cx = svgSize / 2
  const cy = svgSize / 2
  const bottomPoint = polarToCartesian(cx, cy, radius.value * 2, 0)
  return bottomPoint.y >= trophyY
})
</script>