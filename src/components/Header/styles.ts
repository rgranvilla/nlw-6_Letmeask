import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background: ${({ theme }) => theme.colors.bgHeader};

  .content {
    height: 4.5rem;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      max-height: 2.8125rem;
    }
  }

  .header-right-side {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`;
