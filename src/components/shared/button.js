import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 20px;
  text-decoration: none;
  //   font-weight: 600;
  gap: 0 5px;
  border: 2px solid;
  border-radius: 5px;
  padding: 4px 10px;
  max-width: 168px;
  max-height: 35px;
  cursor: pointer;

  a {
    text-decoration: none;
  }
  svg {
    width: 30px;
  }
  &:hover {
    color: #f21919;
    > a {
      color: #f21919;
    }
  }
  @media (max-width: 500px) {
    a {
      font-size: 14px;
      padding: 2px 4px;
    }
    svg {
      width: 15px;
    }
  }
`;
