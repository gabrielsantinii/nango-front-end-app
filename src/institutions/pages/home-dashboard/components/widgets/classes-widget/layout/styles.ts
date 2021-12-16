import styled from "styled-components";

export const ClassesWidgetContainer = styled.div`
    > .class-card + .class-card {
        margin-top: 8px;
    }
    flex: 1;
    overflow-x: scroll;

    > .class-card:nth-child(odd) {
        background: var(--terceary-white);
    }
`;
