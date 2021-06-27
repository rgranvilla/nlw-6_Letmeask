import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 3.125rem;
  border-radius: 8px;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.buttonBgPrimary};
  color: ${({ theme }) => theme.colors.textContrast};
  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 0.5rem;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.buttonHoverBgPrimary};
  }

  &:disabled {
    filter: opacity(0.5);
    cursor: not-allowed;
  }

  &.outlined {
    background: ${({ theme }) => theme.colors.buttonBgTertiary};
    border: 1px solid ${({ theme }) => theme.colors.buttonBgPrimary};
    color: ${({ theme }) => theme.colors.buttonBgPrimary};
    transition: filter 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors.buttonBgTertiary};
      filter: brightness(1.2);
    }
  }
`;
