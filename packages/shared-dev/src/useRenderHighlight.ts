import { useEffect, useRef, useState } from 'react';

const useRenderHighlight = () => {
  const [ref, setRef] = useState<HTMLElement | null>(null);

  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!ref) return;

    if (timer) clearTimeout(timer.current);

    ref.style.outline = '3px solid orange';

    timer.current = setTimeout(() => {
      ref.style.outline = '';
    }, 300);
  });

  return setRef;
};

export { useRenderHighlight };
