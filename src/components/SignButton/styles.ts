import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  background: transparent;
  border: 0;
  cursor: pointer;
  transition: filter 0.3s;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: ${({ theme }) => theme.colors.colorHighlight};
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
