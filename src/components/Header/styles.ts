import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;

  background: ${({ theme }) => theme.colors.bgHeader};

  .content {
    height: 4.5rem;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      > img {
        max-height: 2.8125rem;
      }
    }
  }

  .header-right-side {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .room-buttons {
    display: flex;
    gap: 1rem;

    align-items: center;

    button {
      height: 2.5rem;
    }
  }
`;
