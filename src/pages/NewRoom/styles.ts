import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 6;

    background: ${({ theme }) => theme.colors.bgContrast};
    color: ${({ theme }) => theme.colors.textContrast};

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 7.5rem 5rem;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 2.25rem "Poppins", sans-serif;
      line-height: 2.625rem;
      margin-top: 1rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-top: 1rem;
      color: ${({ theme }) => theme.colors.textContrast};
    }
  }

  main {
    flex: 8;

    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    .toggleThemeContainer {
      &:first-child {
        align-self: center;
        margin-bottom: 4rem;
      }
    }

    > img {
      align-self: center;
    }

    h2 {
      font-size: 1.5rem;
      margin: 4rem 0 1.5rem;
      font-family: "Poppins", sans-serif;
    }

    form {
      input {
        height: 3.125rem;
        border-radius: 0.5rem;
        padding: 0 1rem;
        background: ${({ theme }) => theme.colors.bgSecundary};
        border: 1px solid ${({ theme }) => theme.colors.textPlaceholder};
      }
      button {
        margin-top: 1rem;
      }

      button,
      input {
        width: 100%;
      }
    }

    p {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.textSecundary};
      margin-top: 1rem;

      a {
        color: ${({ theme }) => theme.colors.colorHighlight};
      }
    }
  }
`;
