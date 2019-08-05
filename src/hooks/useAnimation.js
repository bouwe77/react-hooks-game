// Inspiration: https://github.com/facebook/react/issues/14195 & https://codesandbox.io/s/ojxl32jm4z (Dan Abramov)
import { useRef, useLayoutEffect } from "react";

const useAnimation = callback => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const frameRef = useRef();
  useLayoutEffect(() => {
    const loop = () => {
      frameRef.current = requestAnimationFrame(loop);
      const cb = callbackRef.current;
      cb();
    };
    frameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);
};

export default useAnimation;
