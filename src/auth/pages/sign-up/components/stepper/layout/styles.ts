import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";

type CircleProps = HtmlHTMLAttributes<HTMLDivElement> & { current: number; index: number; numberOfSteps: number };

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Circle = styled.div<CircleProps>`
    min-width: 48px;
    min-height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 700 24px "Metropolis";
    color: var(--primary-white);
    ${({ current, index }) =>
        index === current &&
        `
    background: var(--primary-red);
    `}

    ${({ current, index }) => index < current && `background: var(--primary-red)`}
  ${({ current, index }) => index > current && `background: var(--quinquennial-gray)`}
`;

export const LineWrapper = styled.div<CircleProps>`
    display: flex;
    width: ${(props) => `${100 / props.numberOfSteps}%`};

    > .firstLine,
    .lastLine {
        width: 50%;
        height: 2px;
    }

    > .firstLine {
        background: ${({ current, index }) => (index <= current ? `var(--primary-red)` : `var(--quinquennial-gray)`)};
    }

    > .lastLine {
        background: ${({ current, index }) => (index < current ? `var(--primary-red)` : `var(--quinquennial-gray)`)};
    }
`;
