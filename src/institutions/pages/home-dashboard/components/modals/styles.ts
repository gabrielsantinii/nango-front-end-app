import styled from "styled-components";
import Sheet from "react-modal-sheet";
import { XLg as Close } from "@styled-icons/bootstrap";

export const Modal = styled(Sheet)`
    display: flex;
    .react-modal-sheet-container {
        background: transparent !important;
        border-top-right-radius: 10px !important;
        border-top-left-radius: 10px !important;
        box-shadow: none !important;
    }

    .react-modal-sheet-content {
        width: 100%;
        max-width: 768px;
        align-self: center;
        background: var(--primary-white);

        border-top-right-radius: 10px !important;
        border-top-left-radius: 10px !important;

        > header {
            display: flex;
            align-items: center;
            background: var(--terceary-gray);
            height: 44px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            > p {
                font-size: 18px;
                font-weight: 500;
                color: var(--primary-white);
                > strong {
                    font-weight: 700;
                }
            }
        }
    }
`;

export const Form = styled.form`
    padding: 24px 24px;
    > .input-container + .input-container,
    .primary-button {
        margin-top: 12px;
    }

    > .primary-button {
        margin-left: auto;
        max-width: 330px;
    }
`;

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
