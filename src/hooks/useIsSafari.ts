import { useState } from "react";

export function useIsSafari() {
  const [isSafari] = useState(() => {
    if (typeof navigator === "undefined") return false;

    const ua = navigator.userAgent;

    const isSafariBrowser =
      /Safari/.test(ua) &&
      !/Chrome/.test(ua) &&
      !/CriOS/.test(ua) &&
      !/FxiOS/.test(ua) &&
      !/Edg/.test(ua) &&
      !/OPR/.test(ua);

    return isSafariBrowser;
  });

  return isSafari;
}