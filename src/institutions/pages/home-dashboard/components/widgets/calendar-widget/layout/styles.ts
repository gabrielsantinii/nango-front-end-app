import styled from "styled-components";
import { measureEquivalence } from "../../../../../../../shared/styles";

export const CalendarWidgetContainer = styled.div`
    padding-top: ${measureEquivalence.height(15)};
    padding-bottom: ${measureEquivalence.height(15)};
    padding-left: ${measureEquivalence.width(15)};
    padding-right: ${measureEquivalence.width(15)};

    flex: 1;
    align-self: stretch;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--secondary-white);
    border-radius: 10px;
`;
