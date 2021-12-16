import { HtmlHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type AvatarProps = HtmlHTMLAttributes<HTMLAllCollection> & {
    src?: string;
};

function pickupRandomColor(): string {
    return ["blue", "red", "green"][Math.floor(Math.random() * 3)];
}

export const AvatarContainer = styled.div<AvatarProps>`
    display: flex;

    flex-shrink: 0;
    width: 63px;
    height: 63px;
    border-radius: 50%;

    background-color: var(--terceary-gray);
    border: 2px solid var(--${pickupRandomColor()}-green);

    ${(props) =>
        props.src &&
        css`
            background-image: url(${props.src});
            background-position: center;
            background-size: cover;
        `}
`;
