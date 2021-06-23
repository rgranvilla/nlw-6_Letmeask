import styled, { css } from "styled-components";

interface ToggleProps extends React.HTMLProps<HTMLButtonElement> {
  isLight: boolean;
}

export const ToggleContainer = styled.button<ToggleProps>`
  width: 7rem;
  height: 2rem;
  cursor: pointer;

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
  border-radius: 0.75rem;
  padding: 0.5rem;
  position: relative;

  background: ${({ theme }) => theme.colors.themeGradient};
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textContrast};

  display: flex;
  justify-content: space-between;

  svg {
    color: ${({ theme }) => theme.colors.textContrast};
    height: auto;
    width: 1rem;
    transition: all 0.5s linear;

    &:first-child {
      transform: ${({ isLight }) =>
        isLight ? "translateY(0)" : "translateY(100px)"};
    }
    // moon icon
    &:nth-child(2) {
      transform: ${({ isLight }) =>
        isLight ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;
