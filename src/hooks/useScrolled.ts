import useWindowScrollPosition from '@rehooks/window-scroll-position';

export function useScrolled() {
  if (typeof window !== 'undefined') {
    const position = useWindowScrollPosition();
    return position.y > 40;
  }

  return false;
}
