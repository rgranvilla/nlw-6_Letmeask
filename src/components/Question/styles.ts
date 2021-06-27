import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.bgHeader};
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.04);
  padding: 1.5rem;

  & + .question {
    margin-top: 1rem;
  }

  &.highlighted {
    background: ${({ theme }) => theme.colors.bgTertiary};
    border: 1px solid ${({ theme }) => theme.colors.textHighlight};

    footer .user-info span {
      color: ${({ theme }) => theme.colors.textHighlight};
    }
  }

  &.answered {
    opacity: 0.5;
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

    div {
      display: flex;
      gap: 1rem;
    }

    button {
      border: 0;
      background: transparent;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: filter 0.3s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${({ theme }) => theme.colors.textSecundary};
        svg {
          height: 1.25rem;
          width: 1.25rem;
          stroke: ${({ theme }) => theme.colors.textPrimary};
          color: ${({ theme }) => theme.colors.textPrimary};
        }
        &.liked {
          svg {
            stroke: ${({ theme }) => theme.colors.textPrimary};
            color: ${({ theme }) => theme.colors.textPrimary};
          }
        }
        button {
        }

        &.liked {
          svg path {
            color: ${({ theme }) => theme.colors.textPrimary};
            stroke: ${({ theme }) => theme.colors.textHighlight};
          }
        }

        &:disabled {
          cursor: not-allowed;
        }
      }

      &:hover {
        filter: brightness(1.4);
      }

      .likes {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.textSecundary};
        display: flex;
        align-items: center;

        gap: 0.25rem;
        span {
          font-size: 1rem;
        }
        svg {
          height: 1rem;
          width: 1rem;
        }
      }
    }
  }
`;
