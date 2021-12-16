import styled from "styled-components";
import { measureEquivalence } from "../../../../../../../shared/styles";

export const StudentsWidgetContainer = styled.div`
    padding-top: ${measureEquivalence.height(22)};

    display: flex;
    flex-direction: column;

    background-color: var(--secondary-white);
    border-radius: 10px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`;
export const Header = styled.div`
    padding-right: ${measureEquivalence.width(15)};
    padding-left: ${measureEquivalence.width(15)};

    > .search-input-container {
        > input {
            font-size: 12px;
        }
    }
`;
export const Main = styled.div``;
export const StudentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${measureEquivalence.height(26)};

    > .student-card:nth-child(odd) {
        background-color: var(--terceary-white);
    }
`;
