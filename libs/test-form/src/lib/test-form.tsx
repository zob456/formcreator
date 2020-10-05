import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TestFormProps {}

const StyledTestForm = styled.div`
  color: pink;
`;

export const TestForm = (props: TestFormProps) => {
  return (
    <StyledTestForm>
      <h1>Welcome to test-form!</h1>
    </StyledTestForm>
  );
};

export default TestForm;
