import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { Wrapper } from "./TweetQuote.styles";

const TweetQuote = ({ quote, author }) => {
  return (
    <Wrapper>
      <button>
        <a
          href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
          id="tweet-quote"
          className="twitter-share-buttons"
        >
          <FontAwesomeIcon
            icon={faTwitterSquare}
            id="twitter-quote"
            size={"20px"}
          />
        </a>
      </button>
    </Wrapper>
  );
};

export default TweetQuote;
