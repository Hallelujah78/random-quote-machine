import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { Wrapper } from "./TweetQuote.styles";


const TweetQuote = ({quote, author}) => {

  return (
    <Wrapper>

      <a
        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
        id="tweet-quote"
        className="twitter-share-buttons">

        <FontAwesomeIcon icon={faTwitterSquare} id="twitter-quote" />
      </a>
    </Wrapper>
  );
};

export default TweetQuote;
