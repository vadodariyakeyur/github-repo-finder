import { useEffect, useRef, useState } from "react";

const useDebounce = <T>(value: T, timeout = 300) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const dataTimerRef = useRef<number>();

  useEffect(() => {
    clearTimeout(dataTimerRef.current);
    dataTimerRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);
  }, [value, timeout]);

  return debouncedValue;
};

export default useDebounce;
