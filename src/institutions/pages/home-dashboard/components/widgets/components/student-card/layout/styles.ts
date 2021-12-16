import styled from "styled-components";

export const StudentCardContainer = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 56px;

    padding-top: 11px;
    padding-bottom: 11px;

    padding-left: 30px;
    padding-right: 30px;

    background: var(--secondary-background);

    > .avatar-container {
        width: 34px;
        height: 34px;
    }

    cursor: pointer;
    transition: 180ms all;
    &:hover {
        filter: brightness(0.99);
    }
`;

export const StudentDetails = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    > h4,
    h3 {
        text-overflow: ellipsis;
    }

    > h3 {
        color: var(--primary-text);
    }
`;

export const StudentName = styled.h4`
    font-size: 10px;
    line-height: 10px;
`;
export const StudentEmail = styled.span`
    font-size: 10px;
    line-height: 10px;
`;
