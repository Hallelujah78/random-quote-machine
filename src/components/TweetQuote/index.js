import React from "react";

import { Wrapper } from "./TweetQuote.styles";
import Tweet from "./logo_blue.svg";

const TweetQuote = ({ quote, author }) => {
  return (
    <Wrapper>
      <div>
        <p>
          <a
            href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
          >
            click here
            {/* <img className="tweet-icon" src={Tweet} alt="tweet quote" /> */}
          </a>
        </p>
      </div>
    </Wrapper>
  );
};

export default TweetQuote;
