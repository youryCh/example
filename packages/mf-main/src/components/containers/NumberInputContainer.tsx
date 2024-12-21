import styled from 'styled-components';

/**
 * Styled input type="number" container.
 */
export const NumberInputContainer = styled.div<{className?: string}>`
  ${({className}) => className}

  & input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
