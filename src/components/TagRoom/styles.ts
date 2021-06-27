import styled from "styled-components";

export const Container = styled.div`
  button {
    height: 70px;
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.buttonBgPrimary};
    background: ${({ theme }) => theme.colors.bgHeader};
    border-radius: 0.5rem;
    padding-left: 0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.buttonHoverBgPrimary};
      .number-questions {
        div {
          background: ${({ theme }) => theme.colors.buttonHoverBgPrimary};
        }
      }
      .access-room {
        background: ${({ theme }) => theme.colors.buttonHoverBgPrimary};
      }
    }

    .number-questions {
      div {
        background: ${({ theme }) => theme.colors.buttonBgPrimary};
        height: 2rem;
        width: 2rem;
        border-radius: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        span {
          font-size: 1rem;
          font-weight: 500;
          color: ${({ theme }) => theme.colors.textContrast};
        }
      }
    }
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.75rem;

      strong {
        width: 100%;
        font-weight: 500;
        font-size: 1.125rem;
        color: ${({ theme }) => theme.colors.textPrimary};
      }
    }

    .to-answers {
      width: 100%;
      padding-right: 0.5rem;
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;

      svg {
        height: 1.25rem;
        width: 1.25rem;
        color: ${({ theme }) => theme.colors.colorHighlight};
      }

      span {
        color: ${({ theme }) => theme.colors.colorHighlight};
      }
    }

    .access-room {
      height: 100%;
      width: 60px;
      background: ${({ theme }) => theme.colors.buttonBgPrimary};

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        height: 2rem;
        width: 2rem;
        color: ${({ theme }) => theme.colors.textContrast};
      }
    }
  }
`;
