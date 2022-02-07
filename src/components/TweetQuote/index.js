import React from "react";

import { Wrapper } from "./TweetQuote.styles";
import Tweet from "./logo_blue.svg";

const TweetQuote = ({ quote, author }) => {
  return (
    <Wrapper>
      <a
        target="_top"
        rel="noopener noreferrer"
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
      >
        <img id="tweet-icon" src={Tweet} alt="tweet quote" />
      </a>
    </Wrapper>
  );
};

export default TweetQuote;
