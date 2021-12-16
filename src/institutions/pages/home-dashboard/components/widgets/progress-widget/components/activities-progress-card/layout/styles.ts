import styled from "styled-components";
import { measureEquivalence } from "../../../../../../../../../shared/styles";

export const ActivitiesProgressCardContainer = styled.div`
    background-color: var(--primary-blue);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-top: ${measureEquivalence.height(21)};
    padding-bottom: ${measureEquivalence.height(22)};

    padding-left: ${measureEquivalence.width(15)};
    padding-right: ${measureEquivalence.width(10)};
`;
export const ProgressPercentage = styled.h3`
    font-size: 24px;
    line-height: 24px;
    color: var(--primary-white);
    margin-right: ${measureEquivalence.width(21)};
`;

export const ActivitiesProgressDetails = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;
export const ProgressDescription = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12.86px;
    color: var(--primary-white);
    font-weight: 300;
`;
export const ProgressCount = styled.h3`
    font-size: 21.43px;
    color: var(--primary-white);
    margin-top: ${measureEquivalence.height(8)};
`;
