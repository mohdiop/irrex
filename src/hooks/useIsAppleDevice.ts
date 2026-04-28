export function useIsAppleDevice() {
  const ua = navigator.userAgent;

  const iOS = /iPhone|iPad|iPod/.test(ua);
  const mac = /Macintosh/.test(ua);
  const isTouchMac = mac && navigator.maxTouchPoints > 1;

  return iOS || isTouchMac;
}