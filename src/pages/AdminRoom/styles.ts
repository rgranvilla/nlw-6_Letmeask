import styled from "styled-components";

export const Container = styled.div`
  margin-top: 8rem;

  main {
    max-width: 800px;
    margin: 0 auto;
    .room-title {
      margin: 2rem 0 1.5rem;
      display: flex;
      align-items: center;

      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.textPrimary};
      }

      span {
        margin-left: 1rem;
        background: ${({ theme }) => theme.colors.colorHighlight};
        border-radius: 30rem;
        padding: 0.5rem 1rem;
        color: ${({ theme }) => theme.colors.textContrast};
        font-weight: 500;
        font-size: 0.875rem;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 1rem;
        border-radius: 0.5rem;
        background: ${({ theme }) => theme.colors.bgSecundary};
        box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;

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
            color: ${({ theme }) => theme.colors.textPrimary};
            font-weight: 500;
          }
        }

        > span {
          font-size: 0.875rem;
          color: ${({ theme }) => theme.colors.textSecundary};
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: ${({ theme }) => theme.colors.textHighlight};
            text-decoration: underline;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: filter 0.3s;

            &:hover {
              filter: brightness(0.8);
            }
          }
        }
      }
    }

    .question-list {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`;
