import styled from 'styled-components';


export const Wrapper = styled.div`
display: block;
clear: both;

/*This is the <a> tag*/
.twitter-share-button{
  clear: both;
  float: left;

  font-size: 50px;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  transition: 0.4s;
  path{fill: #ffc133;}

}

/*this is the button*/
#twitter-quote{
  clear: both;
  float: left;

  font-size: 50px;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  transition: 0.4s;
  path{fill: #ffc133;}
}

:hover{
  opacity: 0.8;
}
`;
