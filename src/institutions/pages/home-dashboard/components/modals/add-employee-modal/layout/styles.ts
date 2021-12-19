import styled from "styled-components";
import Sheet from "react-modal-sheet";
import { XLg as Close } from "@styled-icons/bootstrap";

export const Modal = styled(Sheet)`
    display: flex;

    .react-modal-sheet-container {
        background: transparent !important;
        border-top-right-radius: 10px !important;
        border-top-left-radius: 10px !important;
    }

    .react-modal-sheet-content {
        width: 100%;
        max-width: 768px;
        align-self: center;
        background: var(--primary-white);
        padding: 24px 12px;
        border-top-right-radius: 10px !important;
        border-top-left-radius: 10px !important;

        > header {
            display: flex;
            align-items: center;

            > p {
                font-size: 18px;
                font-weight: 700;
                color: var(--primary-white);
            }
        }
        > main {
            margin-top: 30px;
            display: flex;
            flex-direction: column;

            > div + div {
                margin-top: 20px;
            }
            > .main-button {
                margin-top: 20px;
            }
        }
    }
`;

export const Form = styled.form``;

export const CloseIcon = styled(Close)`
    margin-left: auto;
    padding: 5px;

    width: 30px;
    height: 30px;

    background-color: var(--black);
    fill: var(--red-500);

    cursor: pointer;
    transition: 180ms all;
    &:hover {
        background-color: var(--gray-900);
        filter: brightness(0.8);
    }
`;
