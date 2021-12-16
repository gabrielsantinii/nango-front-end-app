import styled from "styled-components";
import { measureEquivalence } from "../../../../../../../../shared/styles";

export const StudentCardContainer = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 56px;

    padding-top: ${measureEquivalence.height(11)};
    padding-bottom: ${measureEquivalence.height(11)};

    padding-left: ${measureEquivalence.width(30)};
    padding-right: ${measureEquivalence.width(30)};

    background: var(--secondary-background);

    > .avatar-container {
        width: 34px;
        height: 34px;
    }

    cursor: pointer;
    transition: 180ms all;
    
    &:hover {
        filter: brightness(0.95);
    }
`;

export const StudentDetails = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: ${measureEquivalence.width(10)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StudentName = styled.h4`
    font-size: 12px;
    line-height: 15px;
`;
export const StudentEmail = styled.span`
    font-size: 12px;
    line-height: 15px;
`;
