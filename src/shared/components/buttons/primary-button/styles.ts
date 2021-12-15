import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    max-width: 100%;
    min-height: 55px;

    background: var(--primary-red);
    color: var(--primary-white);
    font-weight: 700;

    transition: 180ms all;
    border-radius: 10px;

    &:not(:disabled) {
        cursor: pointer;
        &:hover {
            filter: brightness(0.8);
        }
    }

    &:disabled {
        filter: brightness(1.5);
        opacity: 0.4;
        cursor: not-allowed;
    }
`;
