import styled from "styled-components";

export const Wrapper = styled.div`
  /*This is the <a> tag*/
  .twitter-share-buttons {
    float: left;
    height: 40px;
    width: 50px;
    font-size: 20px;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    transition: 0.4s;
  }

  /*this is the button*/
  #twitter-quote {
    float: left;
    height: 100px;
    font-size: 50px;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    transition: 0.4s;
    path {
      fill: #ffc133;
    }
  }
`;
