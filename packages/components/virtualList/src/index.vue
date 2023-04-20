<template>
  <div class="f-virtual-list" ref="virtualList" :style="{ height }" @scroll="onScrollEvent()">
    <div class="f-virtual-list__space" ref="virtualList__space"></div>
    <div class="f-virtual-list__content" ref="virtualList__content">
      <div v-for="(item) in getVisibleData" class="f-virtual-list__item" ref="virtualList__item" :id="`${item._index_}`">
        <slot ref="slot" :params="{ row: item, $index: item._index_ }"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Props } from './props'
import {
  ref,
  reactive,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  onUpdated,
  onBeforeUnmount,
  nextTick
} from 'vue'
const props = defineProps(Props)

const virtualList = ref<HTMLElement | null>(null)
const virtualList__space = ref<HTMLElement | null>(null)
const virtualList__content = ref<HTMLElement | null>(null)
const virtualList__item = ref<HTMLCollection | null>(null)

type Positions = {
  index: number
  height: number
  top: number
  bottom: number
}
const state = reactive<{
  positions: Positions[]
  screenHeight: number
  start: number
  end: number
  isMouseHover: boolean
  intervalID: ReturnType<typeof setInterval> | null
}>({
  positions: [], // 每行的位置信息
  screenHeight: 0, // 可视区域高度
  start: 0, // 起始索引
  end: 0, // 结束索引
  isMouseHover: false, // 鼠标是否移入列表
  intervalID: null
})

onBeforeMount(() => {
  initPositions()
})

onMounted(() => {
  state.screenHeight = virtualList!.value!.clientHeight
  state.start = 0
  state.end = state.start + getVisibleCount.value
  setAutoScroll()
  addMouseEvent()
})

onUpdated(() => {
  nextTick(() => {
    if (!virtualList__item.value || !virtualList__item.value?.length) {
      return
    }
    // 获取真实元素大小，修改对应的尺寸缓存
    updateItemsSize()
    // 更新列表总高度
    let height = state.positions.at(-1)?.bottom
    virtualList__space!.value!.style.height = `${height}px`
    // 更新真实偏移量
    setStartOffset()
  })
})

onBeforeUnmount(() => {
  clearAutoScroll()
})

watch(
  () => props.data,
  () => {
    initPositions()
  }
)
// 初始化每行的位置信息
const initPositions = () => {
  state.positions = props.data.map((item, index) => {
    return {
      index,
      height: props.estimatedItemSize,
      top: index * props.estimatedItemSize,
      bottom: (index + 1) * props.estimatedItemSize
    }
  })
}

// 获取列表起始索引,通过scrollTop找到起始索引
const getStartIndex = (scrollTop: number = 0): number => {
  return binarySearch(state.positions, scrollTop)
}

// 二分法查找
const binarySearch = (list: Positions[], value: number): number => {
  let start = 0
  let end = list.length - 1
  let tempIndex = null

  while (start <= end) {
    let midIndex = parseInt((start + end) / 2 + '')
    let midValue = list[midIndex].bottom
    if (midValue === value) {
      return midIndex + 1
    } else if (midValue < value) {
      start = midIndex + 1
    } else if (midValue > value) {
      if (tempIndex === null || tempIndex > midIndex) {
        tempIndex = midIndex
      }
      end = end - 1
    }
  }
  return tempIndex as number
}

const getData = computed(() => {
  return props.data.map((item, index) => ({
    _index_: index,
    ...item
  }))
})

// 计算可视区域展示多少条数据
const getVisibleCount = computed((): number => {
  return Math.ceil(state.screenHeight / props.estimatedItemSize)
})

// 计算内容区域上方缓冲区域展示多少条数据
const getAboveCount = computed((): number => {
  return Math.min(state.start, props.bufferScale * getVisibleCount.value)
})

// 计算内容区域下方缓冲区域展示多少条数据
const getBelowCount = computed((): number => {
  return Math.min(
    props.data.length - state.end,
    props.bufferScale * getVisibleCount.value
  )
})

// 计算内容区域的data
const getVisibleData = computed(() => {
  let start = state.start - getAboveCount.value
  let end = state.end + getBelowCount.value
  return getData.value.slice(start, end)
})

// 获取当前的偏移量
const setStartOffset = () => {
  let startOffset = 0
  if (state.start >= 1) {
    let size =
      state.positions[state.start].top -
      (state.positions[state.start - getAboveCount.value]
        ? state.positions[state.start - getAboveCount.value].top
        : 0)
    startOffset = state.positions[state.start - 1].bottom - size
  } else {
    startOffset = 0
  }
  // 将内容区域偏移到当前可视区域内
  virtualList__content!.value!.style.transform = `translate3d(0,${startOffset}px,0)`
}

// 获取当前被渲染出来的列表项的当前尺寸
const updateItemsSize = () => {
  if (virtualList__item.value) {
    for (let i = 0; i < virtualList__item.value.length; i++) {
      let node = virtualList__item.value[i]
      let rect = node.getBoundingClientRect()
      let height = rect.height
      let index = +node.id
      let oldHeight = state.positions[index].height // 原始的预估高度
      let diffHeight = oldHeight - height

      // 存在差值
      if (diffHeight) {
        state.positions[index].bottom =
          state.positions[index].bottom - diffHeight
        state.positions[index].height = height
        for (let j = index + 1; j < state.positions.length; j++) {
          // 更新当前项往后的数据
          state.positions[j].top = state.positions[j - 1].bottom
          state.positions[j].bottom = state.positions[j].bottom - diffHeight
        }
      }
    }
  }
}

// 滚动事件
const onScrollEvent = () => {
  // 当前滚动位置
  let scrollTop = virtualList!.value!.scrollTop
  // 开始索引
  state.start = getStartIndex(scrollTop)
  // 结束索引
  state.end = state.start + getVisibleCount.value

  // 内容区域偏移量
  setStartOffset()
}

// 添加自动滚动
const setAutoScroll = () => {
  if (state.intervalID === null && props.autoScroll && !state.isMouseHover) {
    state.intervalID = setInterval(() => {
      if (virtualList.value) {
        let realScrollDistance = 0
        if (props.scrollDistance) {
          realScrollDistance = props.scrollDistance
        }
        if (props.scrollRow && realScrollDistance === 0) {
          let tempDistance = 0
          for (let i = 0; i < props.scrollRow; i++) {
            tempDistance += state.positions[state.start + i].height
          }
          realScrollDistance = tempDistance
        }


        if (Math.abs(virtualList.value.scrollHeight - virtualList.value.clientHeight - virtualList.value.scrollTop) >= 1) {
          let top = virtualList.value.scrollTop + realScrollDistance
          virtualList.value.scrollTo({ top, behavior: 'smooth' })
        } else {
          clearAutoScroll()
          setTimeout(() => {
            // @ts-ignore
            virtualList!.value!.scrollTo({ top: 0, behavior: 'instant' })
            setTimeout(() => {
              setAutoScroll()
            }, 500);

          }, props.stopTime);
        }

      }
    }, props.scrollInterval)
  }
}

// 清除自动滚动
const clearAutoScroll = () => {
  if (state.intervalID) {
    clearInterval(state.intervalID)
    state.intervalID = null
  }
}

// 添加鼠标事件
const addMouseEvent = () => {
  if (virtualList.value) {
    virtualList.value.addEventListener('mouseenter', () => {
      clearAutoScroll()
      state.isMouseHover = true
    })

    virtualList.value.addEventListener('mouseleave', () => {
      state.isMouseHover = false
      setAutoScroll()
    })
  }
}
</script>