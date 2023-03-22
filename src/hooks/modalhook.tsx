import { useEffect, RefObject } from 'react';

 export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      callback();
    }
  };

  useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      handleClick(event);
    };

    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [ref, handleClick]);
};


