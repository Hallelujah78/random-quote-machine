import React from "react";

//styles
import { Wrapper, Content } from "./QuoteBox.styles";

const QuoteBox = (props) => {
  return (
    <Wrapper>
      <Content id="quote-box">{props.children}</Content>
    </Wrapper>
  );
};

export default QuoteBox;
