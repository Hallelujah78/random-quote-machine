//Notes

// RENDERING NESTED COMPONENTS
// To nest a component inside another components
// you must pass it as props = MyComp = (props)
// You must use {props.children} in the parent

import React from "react";

//Pseudo API
import API from "./API";


//styles

//components
import QuoteBox from "./components/QuoteBox";
import QuoteText from "./components/QuoteText";
import Author from "./components/Author";
import NewQuote from "./components/NewQuote";
import TweetQuote from "./components/TweetQuote";

//Hook
import {useQuoteFetch} from './hooks/useQuoteFetch';

//styles
import { GlobalStyle } from "./GlobalStyle";

const App = (props) => {
const {state, error, setLoading, setIsLoadingQuote} = useQuoteFetch();




if (error) return <div>Something went wrong...</div>

  return (
    <div className="App">

      <QuoteBox>

        <QuoteText
        quote={state.quote}
        />

        <Author
        author={state.author}
        />
        <NewQuote
        text="New Quote"
        callback={() => setIsLoadingQuote(true)} />
        <TweetQuote />
      </QuoteBox>

      <GlobalStyle />
    </div>
  );
};

export default App;
