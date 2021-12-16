import styled, { css } from "styled-components";
import { measureEquivalence } from "../../../styles";
import { ListUl } from "@styled-icons/bootstrap";
import { Task, DownArrowAlt } from "@styled-icons/boxicons-regular";
import { Dashboard } from "@styled-icons/material-outlined";

export const SideMenuContainer = styled.div`
    position: fixed;
    left: 0;

    width: ${measureEquivalence.width(185)};
    height: 100vh;
    padding-top: ${measureEquivalence.height(58)};
    padding-bottom: ${measureEquivalence.height(43)};
    display: flex;
    flex-direction: column;
    align-items: center;

    background: var(--secondary-white);
    > svg + svg {
        margin-top: ${measureEquivalence.height(78)};
    }
`;

export const SideMenuFooter = styled.div`
    margin-top: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    width: ${measureEquivalence.width(97)};
    margin-bottom: ${measureEquivalence.height(78)};
`;

const iconsCSS = css`
    width: ${measureEquivalence.width(25)};
    cursor: pointer;
    fill: var(--quaternary-gray);
    transition: 180ms all;

    &:hover,
    &.active {
        filter: brightness(0.5);
    }
`;

export const DashboardIcon = styled(Dashboard)`
    ${iconsCSS}
`;
export const ClassesIcon = styled(ListUl)`
    ${iconsCSS}
`;
export const ActivitiesIcon = styled(Task)`
    ${iconsCSS}
`;
export const SignoutIcon = styled(DownArrowAlt)`
    ${iconsCSS}
    margin-top: ${measureEquivalence.height(20)};
`;
