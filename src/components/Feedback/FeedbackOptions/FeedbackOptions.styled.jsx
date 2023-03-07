import styled from "styled-components";

export const FeedbackList = styled.ul`
display: flex; 
list-style: none;
padding-left: 0;
`

export const FeedbackElement = styled.li`
margin-right: 10px;
`

export const FeedbackButton = styled.button`
  font-weight: 600;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;
  :hover{
    background-color: #4040b8;
  }
`