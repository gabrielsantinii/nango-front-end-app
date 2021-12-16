import styled from "styled-components";
import { measureEquivalence } from "../../../../../../../shared/styles";

export const EmployeesWidgetContainer = styled.div`
    display: flex;
    align-items: center;

    align-self: stretch;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    > .employee-card + .employee-card {
        margin-left: ${measureEquivalence.width(15)};
    }
`;
