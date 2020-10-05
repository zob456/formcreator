import React from 'react';

import styled from 'styled-components';

interface SubmitButtonProps {
  title: string;
}

const StyledSubmitButton = styled.button`
  color: #e7236c !important;
  font-weight: bold;
  padding: 5px;
  border-color: #e7236c;
  border-style: 50px;
  background-color: white !important;
  border-radius: 10%;
  margin: 10px;
`;

export const Submitbutton = ({ title }: SubmitButtonProps) => {
  return (
    <>
      <StyledSubmitButton type="submit">{title}</StyledSubmitButton>
    </>
  );
};

export default Submitbutton;
