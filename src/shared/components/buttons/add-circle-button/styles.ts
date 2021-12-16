import styled from "styled-components";
import { measureEquivalence } from "../../../styles";
import { PlusLg } from "@styled-icons/bootstrap/";

export const Container = styled.button`
    padding: 10px;

    background: var(--primary-red);
    font-weight: 700;

    transition: 180ms all;

    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

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

export const AddIcon = styled(PlusLg)`
    width: ${measureEquivalence.width(15)};

    height: ${measureEquivalence.height(15)};

    fill: var(--primary-white);
`;
