---
# You can also start simply with 'default'
theme: seriph
addons:
  - "@twitwi/slidev-addon-ultracharger"
addonsConfig:
  ultracharger:
    inlineSvg:
      markersWorkaround: false
    disable:
      - metaFooter
      - tocFooter

background: /cover.jpg

# some information about your slides (markdown enabled)
title: На какие компромиссы<br> идут физики<br> при изучении Вселенной?
date: 11/09/2025
venue: HSE
author: Алексей Болдырев
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
# transition: slide-down
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true

myVar: 345
myVar2: ref<number>(4)
myVar3: 3
---

<br>

# <span style="font-size:32.0pt" v-html="$slidev.configs.title?.replaceAll(' ', '<br/>')"></span>
# <span style="font-size:32.0pt" v-html="$slidev.configs.subtitle?.replaceAll(' ', '<br/>')"></span>
# <span style="font-size:18.0pt" v-html="$slidev.configs.author?.replaceAll(' ', '<br/>')"></span>

<div>
<br>
<span style="color:#b3b3b3ff; font-size: 11px; float: right;">Источник изображения: Midjourney 6.0
</span>
</div>


<style>
  :deep(footer) { padding-bottom: 3em !important; }
</style>

<!--
Hello, my name is Alexey Boldyrev, I am an assistant professor in the Department of Big Data and Information Retrieval at the Faculty of Computer Science at HSE University in Moscow.
-->

---
zoom: 0.83
---

# Обо мне


<style scoped>
.img-container {
  background-color: purple;
  padding: 10px 0;
  width: 200px;
}

img {
  border-radius: 50%;
  width: 180px;
  height: 180px;
  display: block;
  margin: 0 auto;
}

img.rect-img {
  object-fit: cover;
}

img.no-border-radius {
  height: auto;
  width: 380px;
  border-radius: 0; /* Make sure to remove the rounded border */
}

</style>

<div class="grid grid-cols-[4fr_3fr] gap-10">

<div>
<figure>
  <img src="/Alexey.jpg" style="width: 180px, height: 180px !important, border-radius: 50%;">
</figure>
<p style="text-align: center">Алексей Болдырев</p>

* Физик-экспериментатор, к.ф.-м.н. (МГУ)
* Опыт работы:
  * ФИАН, эксперимент SHALON
  * ЦЕРН, эксперимент ATLAS
  * ЦЕРН, эксперимент LHCb
* Лектор и автор курсов в Вышке:
  * Машинное обучение
  * Глубинное обучение
  * Научная визуализация данных
</div>

<div>

<figure>
  <img src="/ATLAS.jpg" class="no-border-radius" style="height: 105px, width: 320px">
</figure>
<br>
<figure>
  <img src="/LHCb.jpg" class="no-border-radius" style="height: 105px, width: 320px">
</figure>
</div>
</div>

---
src: ./slides/0_intro.md
---

---
src: ./slides/3_SWGO.md
---

---
src: ./slides/0_end.md
---
