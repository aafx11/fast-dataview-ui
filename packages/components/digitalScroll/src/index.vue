<template>
  <div class="f-digital-scroll">
    <div class="f-digital-scroll__list">
      <div v-for="(item, index) in state.stringList" :class="['f-digital-scroll__item',{'is-small':item === '.'}]" :key="index">
        <div v-show="item === '.'" class="f-digital-scroll__point">.</div>
        <div v-show="item !== '.'" class="f-digital-scroll__digital-list" :style="getDigitalListStyle(item)">
          <div v-for="(item, j) in 10" class="f-digital-scroll__digital-item" :key="j">{{j}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  ref,
  reactive,
  computed,
  getCurrentInstance,
  onMounted,
  watch
} from 'vue'

const props = defineProps({
  number: {
    type: Number,
    default: 0
  },
  digit: {
    type: Number,
    default: 2
  }
})

let state = reactive<{
  stringList: string[]
}>({
  stringList: []
})

const digitalToStringList = (number: number) => {
  // let str = number.toString().match(/^\d+(?:\.\d{0,2})?/)
  let reg = RegExp(`^\\d+(?:\\.\\d{0,${props.digit}})?`)
  console.log('reg', reg)

  let str = Number(number.toString().match(reg))
  // number.toString().match(`/^\d+(?:\.\d{0,${props.digit}})?/`)

  console.log('digitalToStringList', str)

  let result = str.toString()
  let rs = result.indexOf('.')
  if (rs < 0) {
    rs = result.length
    result += '.'
  }
  while (result.length <= rs + props.digit) {
    result += '0'
  }
  return result.split('')
}

const getDigitalListStyle = computed(() => {
  return function (str: string) {
    console.log('str', str)

    return {
      top: `-${Number(str) * 100}%`
    }
  }
})

onMounted(() => {
  state.stringList = digitalToStringList(props.number)
})

watch(
  () => props.number,
  (value) => {
    console.log('变化', value)

    state.stringList = digitalToStringList(props.number)
  }
)
</script>