import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: calc(10% + 12px);
  color: #fff;
  background-color: #3f51b5;
  border: 0;
  outline: 0;
  padding: 8px 24px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);
  font: inherit;
  text-transform: uppercase;
  user-select: none;
  font-weight: 700;

  transition: background-color 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
    background-color: #303f9f;
  }
`;

const Button = ({ type = 'button', label = '', onClick = () => null }) => (
  <StyledButton type={type} onClick={onClick}>
    {label}
  </StyledButton>
);

export default Button;
