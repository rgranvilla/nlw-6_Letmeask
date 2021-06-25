import styled, { css } from "styled-components";

interface ToggleProps extends React.HTMLProps<HTMLButtonElement> {
  isLight: boolean;
}

export const ToggleContainer = styled.button<ToggleProps>`
  width: 7rem;
  height: 2.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.75rem;

  overflow: hidden;
  ${({ isLight }) =>
    isLight
      ? css`
          border: 0;
        `
      : css`
          border: 1px solid ${({ theme }) => theme.colors.textContrast};
          svg {
          }
        `};
  background: ${({ theme }) => theme.colors.themeGradient};

  div {
    height: 100%;
    width: 100%;

    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-weight: 600;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.textContrast};
    }

    svg {
      color: ${({ theme }) => theme.colors.textContrast};
      height: auto;
      width: 1.125rem;
      transition: all 0.5s linear;

      //sun icon
      &:first-child {
        transform: ${({ isLight }) =>
          isLight ? "translateY(0)" : "translateY(100px)"};
      }
      // moon icon
      &:nth-child(3) {
        transform: ${({ isLight }) =>
          isLight ? "translateY(-100px)" : "translateY(0)"};
      }
    }
  }
`;
