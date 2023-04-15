import type { ComponentInternalInstance } from 'vue';
import type { State } from './types';
import type { TableProps } from './index.vue';
import { computed, nextTick } from 'vue';
import useEvents from './events-helper';
import { getArray, deepClone } from '@fast-dataview-ui/utils/index';

function useUtils(state: State, props: TableProps, table: ComponentInternalInstance) {
  const { handleToggle } = useEvents(table!);

  // 克隆数组
  const deepCloneArr = (val: unknown) => {
    let tempArr = getArray(val);
    return deepClone(tempArr);
  };

  const emitHandle = () => {
    state.toggleCount += 1;
    if (state.toggleCount >= props.emitCondition) {
      handleToggle(props.name);
      // table.emit('handle-toggle', props.name);
    }
  };

  const setData = async (togglePage: number, sliceData: any[], start: number) => {
    // await new Promise((resolve) => {
    //   state.currData.splice(0, togglePage);
    //   setTimeout(resolve, props.pageAnimateDur);
    // });
    // state.currData.push(...sliceData);
    let _index_ = start;
    sliceData.map(item => item._index_ = ++_index_);
    if (state.currData.length) {
      if (togglePage === props.pageSize) {
        state.currData = [...sliceData];
      } else {
        state.currData.push(...sliceData);
        state.currData.splice(0, togglePage);
      }
    } else {
      state.currData.push(...sliceData);
    }

    // await new Promise((resolve) => {
    //   setTimeout(resolve, props.pageAnimateDur);
    // });
  };

  const setCurrData = async () => {
    if (state.tableData.length) {
      clearTimer(false, true);
      state.isEmpty = false;
      let togglePage;
      if (props.mode === 'single') {
        togglePage = props.togglePage;
      } else {
        togglePage = props.pageSize;
      }

      let start, end;
      if (state.currPage === 1) {
        start = 0;
        end = props.pageSize;
      } else {
        start = togglePage * (state.currPage - 2) + props.pageSize;
        end = togglePage * (state.currPage - 1) + props.pageSize;
      }
      let sliceData = state.tableData.slice(start, end);
      if (sliceData.length) {
        if (state.currPage === 1 && state.toggleCount === 0) {
          setData(props.pageSize, sliceData, start);
        } else {
          if (state.currPage === 1) {
            await setData(props.pageSize, sliceData, start);
          } else {
            await setData(togglePage, sliceData, start);
          }
        }
      } else {
        state.currPage = 1;
        emitHandle();
        setCurrData();
      }
      setPageInterval();
    } else {
      clearTimer();
      state.currPage = 1;
      state.currData = [];
      state.isEmpty = true;
      setEmptyTimeout();
    }
  };

  const setPageInterval = () => {
    if (state.intervalId === null && !state.isStopToggle) {
      state.intervalId = setInterval(() => {
        state.currPage += 1;
        setCurrData();
      }, props.toggleDur);
    }
  };

  const setEmptyTimeout = () => {
    if (state.setTimeoutId === null) {
      state.setTimeoutId = setTimeout(() => {
        handleToggle(props.name);
      }, props.emptyEmitDur);
    }
  };

  const clearTimer = (isClearInterval = true, isClearSetTimeout = true) => {
    if (state.intervalId && isClearInterval) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    }
    if (state.setTimeoutId && isClearSetTimeout) {
      clearTimeout(state.setTimeoutId);
      state.setTimeoutId = null;
    }
  };

  // 设置页数并重置定时器
  const setPage = (page: number = 1) => {
    clearTimer();
    state.currPage = page;
    let togglePage;
    if (props.mode === 'single') {
      togglePage = props.togglePage;
    } else {
      togglePage = props.pageSize;
    }
    let start = togglePage * (state.currPage - 1);
    let end = togglePage * (state.currPage - 1) + props.pageSize;
    let sliceData = state.tableData.slice(start, end);
    if (sliceData.length) {
      setData(props.pageSize, sliceData, start);
      setPageInterval();
    } else {
      setCurrData();
    }
    if (!state.tableData.length) {
      setEmptyTimeout();
    }
  };
  return {
    deepCloneArr,
    setCurrData,
    setPageInterval,
    setEmptyTimeout,
    clearTimer,
    setPage,
  };

}
export default useUtils;