import styled from "styled-components";

export const Wrapper = styled.button`
  height: auto;
  margin-right: 1rem;
  float: right;
  clear: both;
  display: block;
  background: #ffc133;
  font-size: 2rem;
  color: #fff;
  border-radius: 6px;
  border: 0px;
  transition: 0.8s linear all;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transform: scaleX(1.01);
  }
`;
