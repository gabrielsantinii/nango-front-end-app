import styled from "styled-components";
import { measureEquivalence } from "../../../styles";

export const SideMenuContainer = styled.div`
    position: fixed;
    left: 0;

    width: ${measureEquivalence.width(185)};
    height: 100vh;

    background: var(--secondary-white);
`;
