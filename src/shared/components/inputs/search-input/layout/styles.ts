import styled from "styled-components";
import { Search } from "@styled-icons/boxicons-regular";

export const SearchInputContainer = styled.div`
    display: flex;
    max-width: 100%;
    position: relative;
    height: 46px;

    > input {
        font-size: var(--default-font);
        width: 100%;
        border-radius: 10px;

        padding-left: 50px;
        padding-right: 15px;

        min-width: none;
        overflow: hidden;
    }
`;

export const SearchIcon = styled(Search)`
    width: 24px;
    height: 24px;
    fill: var(--quaternary-gray);

    position: absolute;
    left: 0;
    margin-left: 20px;
    top: 50%;
    background-color: transparent;
    transform: translate(0, -45%);
`;
