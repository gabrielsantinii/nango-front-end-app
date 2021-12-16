import styled from "styled-components";
import { measureEquivalence } from "../../../../../../../shared/styles";

export const ProgressWidgetContainer = styled.div`
    padding-top: ${measureEquivalence.height(18)};
    padding-bottom: ${measureEquivalence.height(18)};

    padding-left: ${measureEquivalence.width(15)};
    padding-right: ${measureEquivalence.width(15)};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    background-color: var(--secondary-white);
    border-radius: 10px;

    > .period-progress-card {
        margin-top: 14px;
    }
`;
