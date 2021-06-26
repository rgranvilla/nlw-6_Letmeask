import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.bgHeader};
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.04);
  padding: 1.5rem;

  & + .question {
    margin-top: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    .user-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      img {
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
      }

      span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.textSecundary};
      }
    }

    button {
      border: 0;
      background: transparent;
      gap: 0.5rem;
      transition: filter 0.3s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${({ theme }) => theme.colors.textSecundary};

        &.liked {
          color: ${({ theme }) => theme.colors.textHighlight};

          svg path {
            stroke: ${({ theme }) => theme.colors.textHighlight};
          }
        }
      }

      &:hover {
        filter: brightness(1.4);
      }
    }
  }
`;
