import styled from "styled-components";
import { measureEquivalence } from "../../../../../../../../../shared/styles";

export const MessageCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 88px;
    border-radius: 10px;

    padding-top: ${measureEquivalence.height(17)};
    padding-bottom: ${measureEquivalence.height(10)};

    padding-left: ${measureEquivalence.width(19)};
    padding-right: ${measureEquivalence.width(15)};

    background: var(--primary-white);

    cursor: pointer;
    transition: 180ms all;

    &:hover {
        filter: brightness(0.95);
    }
`;

export const MessageHeader = styled.div`
    display: flex;
    align-self: stretch;
    align-items: center;
    justify-content: space-between;

    > .avatar-container {
        width: 34px;
        height: 34px;
    }
`;
export const SentByDetails = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: ${measureEquivalence.width(10)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: ${measureEquivalence.width(82)};

    > h4,
    span {
        font-size: 10px;
        line-height: 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const SentByName = styled.h4``;
export const SentByEmail = styled.span``;

export const SentAt = styled.span`
    font-size: 10px;
    line-height: 13px;

    margin-left: auto;
    margin-bottom: auto;
`;

export const MessageContent = styled.span`
    margin-top: 12px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    align-self: flex-start;

    max-width: ${measureEquivalence.width(164)};

    font-size: 10px;
    color: var(--secondary-gray);
`;


