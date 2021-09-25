import { useState, useEffect } from "react";
import API from "../API";

//helpers
import { getRandomArbitrary } from "../helpers";

const initialState = {
  quotes: [],
  quote: "",
  author: "",
};

export const useQuoteFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingQuote, setIsLoadingQuote] = useState(false);
  //const [results, setResults] = useState(null);


    const getQuotes = async () => {
      try {
        setError(false);
        setLoading(true);
        const myQuotes = await API.getQuotes();

        const quoteIndex = getRandomArbitrary(0, myQuotes.quotes.length);
        console.log(quoteIndex);

        setState((prev) => ({
          ...myQuotes,
          quotes: [...myQuotes.quotes],
          quote: [myQuotes.quotes[quoteIndex].quote],
          author: [myQuotes.quotes[quoteIndex].author],
        }));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

  //initial render
  useEffect(() => {
    if(!isLoadingQuote){
    getQuotes();
  } else {
setIsLoadingQuote(false);
const quoteIndex = getRandomArbitrary(0, state.quotes.length);
setState((prev) => ({
  quotes: [prev.quotes],
  quote: [prev.quotes[quoteIndex].quote],
  author: [prev.quotes[quoteIndex].author],
}));
  }
}, [isLoadingQuote]);

  //useEffect(() => {
  //  setIsLoadingQuote(false);
  //  getQuotes();
  //}, [isLoadingQuote]);
  

  return { state, loading, error, setLoading, setIsLoadingQuote };
};
