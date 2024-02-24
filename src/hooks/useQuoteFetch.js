import { useState, useCallback, useEffect, useRef } from "react";
import API from "../utils/API.js";

//helpers
import { getRandomArbitrary } from "../utils/helpers";

const initialState = {
  quotes: [],
  quote: "",
  author: "",
};

export const useQuoteFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const abortControllerRef = useRef(null);

  const getQuotes = useCallback(async () => {
    setError(false);
    setLoading(true);
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;
    try {
      const myQuotes = await API.getQuotes(controller.signal);
      if (myQuotes) {
        const quoteIndex = getRandomArbitrary(0, myQuotes.quotes.length);

        setState({
          quotes: [...myQuotes.quotes],
          quote: [myQuotes.quotes[quoteIndex].quote],
          author: [myQuotes.quotes[quoteIndex].author],
        });
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.log(error);
        setError(false);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getQuotes();
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [getQuotes]);

  return { state, loading, error, getQuotes };
};
