import React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

/**
 * This ensures that Emotion's styles are inserted before ours so we can override
 * the default react-select styling
 */
function EmotionCssCacheProvider({ children }) {
  const cache = React.useMemo(
    () => createCache({
        key: 'react-select',
        insertionPoint: document.querySelector('title'),
      }),
    []
  );

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}

export default EmotionCssCacheProvider;
