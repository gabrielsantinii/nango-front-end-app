import styled from "styled-components";
import { measureEquivalence } from "../../../../../../../shared/styles";

export const EmployeesWidgetContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    align-self: stretch;
    overflow: hidden;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    > .scroll-container {
        display: flex;
        width: 100%;
        overflow-x: scroll;
        align-self: stretch;

        > .employee-card + .employee-card {
            margin-left: ${measureEquivalence.width(15)};
        }
    }
`;

export const EmployeesWidgetCarousel = styled.div`
    display: flex;
    align-self: stretch;
`;
