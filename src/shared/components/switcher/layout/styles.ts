import { HtmlHTMLAttributes } from "react";
import styled from "styled-components";

interface SwitcherContainerProps extends HtmlHTMLAttributes<HTMLAllCollection> {
    active: boolean;
}

export const SwitcherContainer = styled.div<SwitcherContainerProps>`
    display: flex;
    width: 20.5px;
    height: 8.5px;
    opacity: 0.8;

    position: relative;
    cursor: pointer;

    border-radius: 34.5px;

    transition: 360ms all;
    background-color: ${(props) => (props.active ? `var(--primary-green)` : `var(--secondary-white)`)};

    > .circle {
        width: 15px;
        height: 15px;
        border-radius: 50%;

        transition: 360ms all;

        position: absolute;
        top: 0;
        left: ${(props) => (props.active ? `50%` : `-20%`)};
        background-color: ${(props) => (props.active ? `var(--primary-green)` : `var(--secondary-white)`)};

        transform: translate(0, -20%);
    }
`;
