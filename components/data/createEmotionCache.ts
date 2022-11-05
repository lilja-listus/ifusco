import createCache from "@emotion/cache";
import { EmotionCache } from "@emotion/react";

const isBrowser: boolean = typeof document !== "undefined";

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export default function createEmotionCache(): EmotionCache {
  let insertionPoint: HTMLMetaElement | undefined;

  if (isBrowser) {
    const emotionInsertionPoint: HTMLMetaElement =
      document.querySelector<HTMLMetaElement>(
        'meta[name="emotion-insertion-point"]'
      );

    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ insertionPoint, key: "mui-style" });
}
