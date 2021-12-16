import styled from "styled-components";
import { measureEquivalence } from "../../../../../../../../../shared/styles";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;

    background: var(--secondary-white);
    height: ${measureEquivalence.height(38)};
    border-radius: 10px;
    padding-left: 18px;
    padding-right: 18px;

    cursor: pointer;
    transition: 180ms all;

    &:hover {
        filter: brightness(0.95);
    }
`;

export const Column = styled.div`
    flex: 1 1 0;
    width: 0;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;

    font: 700 var(--default-font) "Metropolis";
    color: var(--terceary-gray);
`;
