//Notes

// RENDERING NESTED COMPONENTS
// To nest a component inside another components
// you must pass it as props = MyComp = (props)
// You must use {props.children} in the parent

import React from "react";
import Tweet from "./logo_blue.svg";
import "./App.css";
//Pseudo API
// import getQuotes from "./API";

//styles

//components
import QuoteBox from "./components/QuoteBox";
import QuoteText from "./components/QuoteText";
import Author from "./components/Author";
import NewQuote from "./components/NewQuote";
// import TweetQuote from "./components/TweetQuote";

//Hook
import { useQuoteFetch } from "./hooks/useQuoteFetch";

//styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const { state, error, setIsLoadingQuote } = useQuoteFetch();

  if (error) return <div>Something went wrong...</div>;
  const handleClick = () => {
    window.location.href =
      "https://twitter.com/intent/tweet?text=" +
      state.quote[0] +
      "  -  " +
      state.author;
  };

  return (
    <div className="App">
      <QuoteBox>
        <QuoteText quote={state.quote} />

        <Author author={state.author} />
        <NewQuote text="New Quote" callback={() => setIsLoadingQuote(true)} />

        <button className="test" onClick={handleClick}>
          <img className="test" src={Tweet} alt="" />
        </button>
        <a
          id="tweet-quote"
          href={"https://twitter.com/intent/tweet?text=" + state.quote[0]}
        ></a>
      </QuoteBox>

      <GlobalStyle />
    </div>
  );
};

export default App;
