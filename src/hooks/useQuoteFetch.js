import { useState, useCallback } from "react";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getQuotes = useCallback(async () => {
    setError(false);
    setLoading(true);
    try {
      const myQuotes = await API.getQuotes();

      const quoteIndex = getRandomArbitrary(0, myQuotes.quotes.length);

      setState({
        quotes: [...myQuotes.quotes],
        quote: [myQuotes.quotes[quoteIndex].quote],
        author: [myQuotes.quotes[quoteIndex].author],
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, []);

  return { state, loading, error, getQuotes };
};
