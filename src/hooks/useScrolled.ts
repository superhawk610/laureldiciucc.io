import useWindowScrollPosition from '@rehooks/window-scroll-position';

export function useScrolled() {
  const position = useWindowScrollPosition();

  return position.y > 40;
}
