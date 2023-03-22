import type { ComponentInternalInstance } from 'vue';
import type { State } from './types';
import type { TableProps } from './index.vue';
import { computed, nextTick } from 'vue';
import useEvents from './events-helper';
import { getArray, deepClone } from '@fast-dataview-ui/utils/index';

function useUtils(state: State, props: TableProps, table: ComponentInternalInstance) {
  const { handleToggle } = useEvents(table);

  // 克隆数组
  const deepCloneArr = (val: unknown) => {
    let tempArr = getArray(val);
    return deepClone(tempArr);
  };

  // 获取当前数据
  const getCurrData = computed(() => {
    if (props.mode === 'page') {
      return state.pageData[state.currPage - 1] || [];
    }

    if (props.mode === 'single') {
      return state.currData || [];
    }
  });

  // 处理分页数据
  const setPageData = () => {
    if (props.mode !== 'page') {
      return;
    }

    if (state.tableData.length) {
      let tempArr = [];
      let num = Math.ceil(state.tableData.length / props.pageSize);
      for (let i = 1; i <= num; i++) {
        let sliceData = state.tableData.slice(i * props.pageSize - props.pageSize, i * props.pageSize);
        tempArr.push(sliceData);
      }
      state.pageData = tempArr;

      // 当前页没有数据,说明切页完成
      if (!tempArr[state.currPage - 1]) {
        state.currPage = 1;
        state.toggleCount += 1;
        if (state.toggleCount >= props.emitCondition) {
          handleToggle(props.name);
        }
      }
    } else {
      state.pageData = [[]];
      state.currPage = 1;
      state.toggleCount = 0;
      handleToggle(props.name);
    }
  };

  // 设置切页定时器
  const setPageTimer = () => {
    if (
      state.intervalId === null &&
      !state.isStopToggle &&
      props.mode === 'page'
    ) {
      state.intervalId = setInterval(() => {
        if (state.pageData[state.currPage]) {
          state.currPage += 1;

        } else {
          state.currPage = 1;
          state.toggleCount += 1;
          if (state.toggleCount >= props.emitCondition) {
            handleToggle(props.name);
          }
        }
      }, props.toggleDur);
    };
  };

  // 设置页数并重置定时器
  const setPage = (page: number = 1) => {
    clearTimer();
    state.currPage = page;
    setPageTimer();
  };

  // 处理单行切换数据
  // const setCurrData = () => {
  //   if (props.mode !== 'single') {
  //     return;
  //   }

  //   if (state.tableData.length) {
  //     let start = (state.currPage - 1) * props.togglePage;
  //     let end = start + props.pageSize;
  //     let lastPage = props.pageSize;
  //     let tempArr = state.tableData.slice(start, end);
  //     console.log('当前数据', tempArr);

  //     if (tempArr.length && tempArr.length === props.pageSize) {
  //       state.currData = tempArr;
  //       // state.currData.push(...tempArr);
  //     } else {
  //       // state.currData = [];
  //       state.currPage = 1;
  //       setCurrData();
  //       state.toggleCount += 1;
  //       if (state.toggleCount >= props.emitCondition) {
  //         handleToggle(props.name);
  //       }
  //     }
  //   } else {
  //     state.currData = [];
  //     state.currPage = 1;
  //     state.toggleCount = 0;
  //     handleToggle(props.name);
  //   }
  // };

  const shiftAndPush = async (arr: any[], shiftLen: number = 1, pushArr: any[] = []) => {
    // nextTick(() => {

    // });
    // nextTick(() => {
    console.log('shiftLen', shiftLen);
    console.log('arr', arr);
    // arr.shift();
    // arr.splice(0, shiftLen);
    // arr.splice(0, 1);
    // });

    // arr.push(pushArr[0]);

    // for (let i = 0; i < shiftLen; i++) {
    //   console.log('循环', i, ':', pushArr[i]);

    //   // arr.push(pushArr[i] || {});

    //   // nextTick(() => {
    //   arr.shift();
    //   // });
    // }

    // arr.splice(0, shiftLen);
    // await new Promise(resolve => setTimeout(() => {
    //   arr.push(...pushArr);
    //   resolve(true);
    // }, 100));
    // await new Promise(resolve => setTimeout(() => {
    //   console.log('splice', shiftLen);

    //   arr.splice(0, shiftLen);
    //   resolve(true);
    // }, 100));

    arr.push(...pushArr);
    await new Promise(resolve => setTimeout(resolve, 300));
    for (let i = 0; i < shiftLen; i++) {
      arr[i] = {};
    }
    arr.splice(0, shiftLen);
  };

  const setRowsHeight = () => {
    state.rowsHeight = new Array(state.tableData.length + props.togglePage).fill('');
  };
  const calcRowsHeight = () => {
    for (let i = 0; i < props.togglePage; i++) {
      state.rowsHeight[i] = '0';
    }
  };

  const setCurrData = async () => {
    if (props.mode !== 'single') {
      return;
    }

    if (state.tableData.length) {
      const total = Math.ceil((state.tableData.length - props.pageSize) / props.togglePage) + 1;
      if (total === 1) {
        console.log('1');

        state.currPage = 1;
        state.toggleCount += 1;
        shiftAndPush(state.currData, props.pageSize, state.tableData.slice());
        if (state.toggleCount >= props.emitCondition) {
          handleToggle(props.name);
        }
      }

      if (
        total !== 1 &&
        state.currPage <= total
      ) {
        console.log('2');

        if (state.currPage === 1) {
          console.log('2-1');

          // shiftAndPush(state.currData, props.pageSize, state.tableData.slice(0, props.pageSize));
          // state.currData = state.tableData.slice(0, props.togglePage);
          state.currData = state.tableData.slice(0, props.pageSize);
          // state.currData = [
          //   ...state.tableData.slice(0, props.togglePage),
          //   ...state.tableData.slice(0, props.pageSize)
          // ];
        } else {
          console.log('2-2');
          console.log('start', (props.pageSize - 1) + ((state.currPage - 2) * props.togglePage) + 1);
          console.log('end', (props.pageSize - 1) + ((state.currPage - 1) * props.togglePage) + 1);


          shiftAndPush(state.currData, props.togglePage, state.tableData.slice(
            (props.pageSize - 1) + ((state.currPage - 2) * props.togglePage) + 1,
            (props.pageSize - 1) + ((state.currPage - 1) * props.togglePage) + 1
          ));
          // setRowsHeight();
          // let start = state.tableData.slice((state.currPage - 1) * props.togglePage, state.currPage * props.togglePage);
          // let end = state.tableData.slice(
          //   (state.currPage - 1) * props.togglePage,
          //   (state.currPage - 1) * props.togglePage + props.pageSize
          // );
          // console.log('start', start);
          // console.log('end', end);

          // state.currData = [...start, ...end];
          // console.log('开始resolve');

          // await new Promise(resolve => setTimeout(resolve, 2000));
          // console.log('完成resolve');

          // calcRowsHeight();
        }
      }

      if (state.currPage > total) {
        console.log('3');

        state.currPage = 1;
        state.toggleCount += 1;
        if (state.toggleCount >= props.emitCondition) {
          handleToggle(props.name);
        }
        setCurrData();
        return;
      }

    } else {
      state.rowsHeight = [];
      state.currData = [];
      state.currPage = 1;
      state.toggleCount = 0;
      handleToggle(props.name);
    }
  };

  const setToggleTimer = () => {
    if (
      state.intervalId === null &&
      !state.isStopToggle &&
      props.mode === 'single'
    ) {
      state.intervalId = setInterval(() => {
        state.currPage += 1;
        setCurrData();
      }, props.toggleDur);
    }
  };

  // 清除定时器
  const clearTimer = () => {
    if (state.intervalId) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
  };

  // 设置序号
  const setIndex = (arr: any[]) => {
    arr.map((item, index) => item._index_ = index + 1);
  };
  return {
    deepCloneArr,
    getCurrData,
    setPageData,
    setPageTimer,
    setPage,
    setCurrData,
    setToggleTimer,
    clearTimer,
    setIndex
  };

}
export default useUtils;