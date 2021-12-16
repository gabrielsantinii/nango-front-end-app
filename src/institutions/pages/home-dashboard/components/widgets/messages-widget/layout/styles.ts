import styled from "styled-components";
import { measureEquivalence } from "../../../../../../../shared/styles";

export const MessagesWidgetContainer = styled.div`
    padding-top: ${measureEquivalence.height(14)};
    padding-bottom: ${measureEquivalence.height(14)};

    padding-left: ${measureEquivalence.width(16)};
    padding-right: ${measureEquivalence.width(16)};

    display: flex;
    flex-direction: column;
    flex: 1;

    background-color: var(--secondary-white);
    border-radius: 10px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    > .message-card + .message-card {
        margin-top: 11px;
    }
`;
