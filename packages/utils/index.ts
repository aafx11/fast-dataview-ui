export const extend = Object.assign;
export const isNotEmptyArray = (val: unknown) => Array.isArray(val) && val.length;

export const getArray = (val: unknown) => (Array.isArray(val) && val) || [];

export const toZero = (val: number) => val >= 0 ? val : 0;

export const sort = (arr: Array<any>, attr: string, order: 'normal' | 'reverse' = 'reverse') => {
  return arr.sort(compare(attr, order));
};

export const compare = (attr: string, order: 'normal' | 'reverse' = 'reverse') => {
  return function (value1: any, value2: any) {
    if (value1[attr] < value2[attr]) {
      return order === 'normal' ? -1 : 1;
    }
    if (value1[attr] > value2[attr]) {
      return order === 'normal' ? 1 : -1;
    }
    return 0;
  };
};

export const deepClone = (obj: any, hash = new WeakMap()) => {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
};
// 获取两点之间的距离
export const getPointsDistance = (pointOne: number[], pointTwo: number[]) => {
  const minusX = Math.abs(pointOne[0] - pointTwo[0])

  const minusY = Math.abs(pointOne[1] - pointTwo[1])

  return Math.sqrt(minusX * minusX + minusY * minusY)
}

export function randomExtend(minNum: number, maxNum?: number) {
  if (arguments.length === 1)
    return parseInt((Math.random() * minNum + 1).toString(), 10)

  else
    return parseInt((Math.random() * (maxNum! - minNum + 1) + minNum).toString(), 10)
}