import styled from "styled-components";
import { measureEquivalence } from "../../../styles";

export const Container = styled.div`
    width: calc(100vw - ${measureEquivalence.width(185)});
    margin-left: ${measureEquivalence.width(185)};

    height: 100vh;

    background: var(--primary-white);
`;

export const Wrapper = styled.div`
    padding-bottom: ${measureEquivalence.height(39)};
    padding-left: ${measureEquivalence.height(28)};
    padding-right: ${measureEquivalence.height(54)};
    display: flex;
    flex-direction: column;
    min-width: 100%;
    min-height: 100%;

    > footer {
        margin-top: auto;
    }
`;

export const ContentWrapper = styled.main`
    padding-top: ${measureEquivalence.height(50)};
    padding-bottom: ${measureEquivalence.height(45)};
    width: 100%;
    height: 100%;
    align-self: stretch;
    flex: 1;
`;
