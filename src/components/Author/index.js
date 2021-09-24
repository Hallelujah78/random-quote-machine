import React from "react";

//styles
import { Wrapper, Content } from "./Author.styles.js";


const Author = ({author}) => {
  return (
  <Wrapper>
  <Content>
  <p id="author">{"-  " + author}</p>
  </Content>
  </Wrapper>

  )
};


export default Author;
