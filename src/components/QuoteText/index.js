import React from "react";

//styles
import { Wrapper, Content } from "./Quote.styles";

const QuoteText = ({quote}) => (
  <Wrapper>
    <Content id="text"><p>{quote}</p></Content>
  </Wrapper>
);

export default QuoteText;
