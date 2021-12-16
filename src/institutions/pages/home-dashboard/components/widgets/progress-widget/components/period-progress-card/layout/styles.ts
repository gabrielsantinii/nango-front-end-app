import styled from "styled-components";
import { measureEquivalence } from "../../../../../../../../../shared/styles";
import { CalendarDay } from "@styled-icons/bootstrap";

export const PeriodProgressCardContainer = styled.div`
    background-color: var(--primary-white);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-top: ${measureEquivalence.height(20)};
    padding-bottom: ${measureEquivalence.height(23)};

    padding-left: ${measureEquivalence.width(21)};
    padding-right: ${measureEquivalence.width(16)};
`;
export const ProgressPercentage = styled.h3`
    font-size: 24px;
    line-height: 24px;
    color: var(--primary-white);
    margin-right: ${measureEquivalence.width(21)};
`;
export const PeriodProgressDetails = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;
export const ProgressDescription = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 12.86px;
    color: var(--primary-blue);
    font-weight: 300;
`;
export const ProgressCount = styled.h3`
    font-size: 21.43px;
    color: var(--primary-blue);
    margin-top: ${measureEquivalence.height(8)};
`;
export const CalendarIcon = styled(CalendarDay)`
    width: 37px;
    height: 37px;

    fill: var(--primary-blue);
`;
