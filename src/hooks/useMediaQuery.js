import { useState, useEffect } from 'react';

/*
The useMediaQuery hook is used in the Navbar component to determine whether the screen size is large or small. 
If the screen size is large, the menu is hidden by default. If the screen size is small, the menu is visible by default. 
When the screen size changes, the menu is hidden if the screen size is large.*/
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);

      const updateMatches = () => {
        setMatches(media.matches);
      };

      updateMatches(); 

      const mediaListener = () => {
        updateMatches();
      };

      media.addEventListener('change', mediaListener);

      return () => {
        media.removeEventListener('change', mediaListener);
      };
    }
  }, [query]);

  return matches;
}
