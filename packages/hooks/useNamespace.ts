export type UseNamespace = {
  b: () => string;
  e: (el: string) => string;
  m: (mo: string) => string;
  em: (el: string, mo: string) => string;
};

function createBem(namespace: string, element?: string, modifier?: string): string {
  let cls = namespace;
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}

export function useNamespace(block: string, needDot = false): UseNamespace {
  const namespace = needDot ? `.f-${block}` : `f-${block}`;
  const b = () => createBem(namespace);
  const e = (element: string) => (element ? createBem(namespace, element) : '');
  const m = (modifier: string) => (modifier ? createBem(namespace, '', modifier) : '');
  const em = (element: string, modifier: string) => (element && modifier ? createBem(namespace, element, modifier) : '');
  return {
    b,
    e,
    m,
    em
  };
}