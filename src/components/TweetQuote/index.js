import React from "react";

import { Wrapper } from "./TweetQuote.styles";
import Tweet from "./Logo blue.svg";

const TweetQuote = ({ quote, author }) => {
  return (
    <Wrapper>
      <div>
        <a
          className="twitter-share-buttons"
          href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
          target="_blank"
          rel="noreferrer noopener"
          id="tweet-quote"
        >
          <img
            className="twitter-share-buttons"
            src={Tweet}
            alt="tweet quote"
          />
        </a>
      </div>
    </Wrapper>
  );
};

export default TweetQuote;
