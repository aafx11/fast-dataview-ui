<template>
  <div class="f-scroll-rank">
    <div class="f-scroll-rank__list" ref="scrollRank" :style="{ '--page-animate-dur': `${props.toggleDuration}ms` }">
      <TransitionGroup tag="div" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @before-leave="beforeLeave"
        @leave="onLeave">
        <div v-for="(item, index) in state.currList" class="f-scroll-rank__item" :key="item">
          <div class="f-scroll-rank__item-wrap">
            <div class="f-scroll-rank__item-info">
              <span v-if="props.showRank" class="f-scroll-rank__item-rank">{{ `NO.${item._index_}` }}</span>
              <span class="f-scroll-rank__item-name">{{ item.name || '' }}</span>
              <div class="f-scroll-rank__item-info-right">
                <span v-if="props.showPercent" class="f-scroll-rank__item-percent">{{
                  `${getPercent(item.value)}%` }}</span>
                <span v-if="props.showRatio && (typeof props.valueFormatter !== 'function')"
                  class="f-scroll-rank__item-ratio">{{ `${item.value} / ${getMaxValue}` }}</span>
                <span v-if="typeof props.valueFormatter === 'function'" class="f-scroll-rank__item-format">
                  {{ `${item.formattedValue}` }}
                </span>
              </div>
            </div>
            <div class="f-scroll-rank__item-progress">
              <Progress :percent="getPercent(item.value)" :color="props.color"
                :duration="props.progressDuration"></Progress>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue';
import { getArray, deepClone, sort } from '@fast-dataview-ui/utils/index';
import { ref, reactive, computed, nextTick, watch, onBeforeUnmount } from 'vue';
import { Progress } from './../../progress';

type DataItem = {
  name: string | number,
  value: number;
  formattedValue?: any;
};
enum orderType {
  default = 'default',
  normal = 'normal',
  reverse = 'reverse',
}

const props = defineProps({
  data: {
    type: Array<DataItem>,
    default: () => []
  },
  pageSize: {
    type: Number,
    default: 5
  },
  togglePage: {
    type: Number,
    default: 3
  },
  toggleDur: {
    type: Number,
    default: 3 * 1000
  },
  toggleDuration: {
    type: Number,
    default: 300
  },
  maxValue: {
    type: Number,
  },
  valueFormatter: {
    type: Function,
  },
  order: {
    type: String as PropType<orderType>,
    default: 'reverse'
  },
  showRank: {
    type: Boolean,
    default: true
  },
  showPercent: {
    type: Boolean,
    default: true
  },
  showRatio: {
    type: Boolean,
    default: true
  },
  color: {
    type: Array as PropType<Array<string>>,
    default: () => (['#24293e', '#024be4'])
  },
  progressDuration: {
    type: Number,
    default: 0.5
  },
});

const scrollRank = ref();

let state = reactive<{
  dataList: any[];
  currList: any[];
  currPage: number;
  isEmpty: boolean;
  intervalId: ReturnType<typeof setInterval> | null;
}>({
  dataList: [],
  currList: [],
  currPage: 1,
  isEmpty: false,
  intervalId: null,
});

const getDataList = (val: unknown) => {
  let cloneArr = deepClone(getArray(val));
  let sortArr = [];
  if (props.order === 'default') {
    sortArr = cloneArr;
  } else {
    sortArr = sort(cloneArr, 'value', props.order as ("reverse" | "normal"));
  }
  if (typeof props.valueFormatter === 'function') {
    sortArr = sortArr.map((item: DataItem, index: number) => {
      item.formattedValue = props.valueFormatter?.call(null, {
        name: item.name,
        value: item.value,
        maxValue: getMaxValue.value,
        index
      });
      return item;
    });
  }
  state.dataList = sortArr;
};

const setData = async (togglePage: number, sliceData: any[], start: number) => {
  let _index_ = start;
  sliceData.map(item => item._index_ = ++_index_);
  if (state.currList.length) {
    if (togglePage === props.pageSize) {
      state.currList = [...sliceData];
    } else {
      state.currList.push(...sliceData);
      state.currList.splice(0, togglePage);
    }
  } else {
    state.currList.push(...sliceData);
  }
  nextTick(() => {
    // console.log('scrollRank', scrollRank.value.getBoundingClientRect());
    if (scrollRank.value) {
      scrollRank.value!.style!.maxHeight = `${scrollRank.value!.getBoundingClientRect().height}px`;
      scrollRank.value!.style!.height = `${scrollRank.value!.getBoundingClientRect().height}px`;
    }
  });
};

const getCurrList = async () => {
  if (state.dataList.length) {
    state.isEmpty = false;
    let togglePage;
    if (props.togglePage >= props.pageSize) {
      togglePage = props.pageSize;
    } else {
      togglePage = props.togglePage;
    }

    let start, end;
    if (state.currPage === 1) {
      start = 0;
      end = props.pageSize;
    } else {
      start = togglePage * (state.currPage - 2) + props.pageSize;
      end = togglePage * (state.currPage - 1) + props.pageSize;
    }

    let sliceData = state.dataList.slice(start, end);
    if (sliceData.length) {
      if (state.currPage === 1) {
        await setData(props.pageSize, sliceData, start);
      } else {
        await setData(togglePage, sliceData, start);
      }
    } else {
      state.currPage = 1;
      getCurrList();
    }
    setPageInterval();
  } else {
    clearTimer();
    state.isEmpty = true;
    state.currPage = 1;
    state.currList = [];
  }
};

const setPageInterval = () => {
  if (state.intervalId === null) {
    state.intervalId = setInterval(() => {
      state.currPage += 1;
      getCurrList();
    }, props.toggleDur);
  }
};

const clearTimer = () => {
  if (state.intervalId) {
    clearInterval(state.intervalId);
    state.intervalId = null;
  }
};
const getMaxValue = computed(() => {
  if (props.maxValue) {
    return props.maxValue;
  } else {
    if (props.order === 'normal') {
      return state.currList.at(-1)?.value || 0;
    } else {
      return state.currList[0]?.value || 0;
    }
  }
});
const getPercent = computed(() => {
  return function (value: number) {
    let result;
    let maxValue = getMaxValue.value;
    result = value / maxValue;

    const roundFun = (value: number, n: number) => Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
    if (typeof result === 'number') {
      return roundFun(result * 100, 1);
    } else {
      return 0.0;
    }
  };
});

const onBeforeEnter = (el: any) => {
  el.style.opacity = '0';
  el.style.gridTemplateRows = '0fr';
};

const onEnter = (el: any, done: () => void) => {
  el.offsetWidth;
  el.style.opacity = '1';
  el.style.gridTemplateRows = '1fr';
  done();
};

const beforeLeave = async (el: any) => {
  el.style.opacity = '1';
  el.style.margin = '0';
};
const onLeave = async (el: any, done: () => void) => {
  el.style.opacity = '0';
  el.style.margin = '0';
  el.style.gridTemplateRows = '0fr';
  await new Promise((resolve) => {
    setTimeout(() => {
      el.remove();
      resolve(true);
    }, props.toggleDuration);
  });
  done();
};

onBeforeUnmount(() => {
  clearTimer()
})

watch(
  () => props.data,
  (val) => {
    getDataList(val);
    getCurrList();
  }, {
  deep: true,
  immediate: true,
}
);
</script>
