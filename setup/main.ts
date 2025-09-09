import { defineAppSetup } from '@slidev/types'

/* plotly */
import { VuePlotly } from 'vue3-plotly'

import { reactive, toRefs } from 'vue'

// import { Range } from 'vue-range-multi'
// import 'vue-range-multi/style.css'

export default defineAppSetup(({ app, router }) => {
  // No need for `setup()` inside this function.
  const data = reactive({ value: 0 })

  // Register the components globally
  app.component('v-plotly', VuePlotly)
  // app.component('MRange', Range)

  // Optional return for readability when needed
  return {
    data: toRefs(data),
  }
})