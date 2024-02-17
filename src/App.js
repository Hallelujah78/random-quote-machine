import React, { useEffect } from "react";

//components
import QuoteBox from "./components/QuoteBox";
import QuoteText from "./components/QuoteText";
import Author from "./components/Author";
import NewQuote from "./components/NewQuote";
import TweetQuote from "./components/TweetQuote";

//Hook
import { useQuoteFetch } from "./hooks/useQuoteFetch";

//styles
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  const { state, error, getQuotes } = useQuoteFetch();

  useEffect(() => {
    getQuotes();
  }, [getQuotes]);

  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="App">
      <QuoteBox id="quote-box">
        <QuoteText quote={state.quote} />

        <Author author={state.author} />
        <NewQuote text="New Quote" callback={getQuotes} />

        <TweetQuote
          id="tweet-quote"
          author={state.author}
          quote={state.quote}
        />
      </QuoteBox>

      <GlobalStyle />
    </div>
  );
};

export default App;
