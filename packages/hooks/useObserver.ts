export function useDomObserver(dom: HTMLElement, callback: () => void) {
  const MutationObserver = window.MutationObserver;
  const observer = new MutationObserver(callback);
  observer.observe(dom, {
    attributes: true, // 观察所有监听的节点属性值的变化
    attributeFilter: ['style'], // 监听的属性
    attributeOldValue: true // 记录上一次被监听的节点的属性变化 
  });
  return observer;
}