import styled from "styled-components";

export const Button = styled.button`
  height: 2.5rem;
  border-radius: 0.5rem;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.bgSecundary};
  border: 1px solid ${({ theme }) => theme.colors.buttonBgPrimary};
  cursor: pointer;

  display: flex;

  div {
    height: 100%;
    background: ${({ theme }) => theme.colors.buttonBgPrimary};
    padding: 0 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 0.75rem;
    width: 15rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
