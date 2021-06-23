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
  }

  .create-room {
    margin-top: 4rem;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #ea4353;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 0.5rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textPlaceholder};

    margin: 2rem 0;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background: ${({ theme }) => theme.colors.textPlaceholder};
      margin-right: 1rem;
    }

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background: ${({ theme }) => theme.colors.textPlaceholder};
      margin-left: 1rem;
    }
  }
`;
