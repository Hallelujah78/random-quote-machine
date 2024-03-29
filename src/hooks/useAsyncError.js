import { useState, useCallback } from "react";

export const useAsyncError = () => {
  const [_, setError] = useState();
  return useCallback(
    (e) => {
      setError(() => {
        throw e;
      });
    },
    [setError]
  );
};
