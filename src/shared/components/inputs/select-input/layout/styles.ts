import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    > label {
        margin-bottom: 8px;
    }

    > .basic-single {
        padding: 0;
        margin: 0;

        > .select__control {
            width: 100%;
            height: 55px;
            padding: 0;
            padding-left: 23px;

            transition: 180ms all;
            outline: none;
            cursor: pointer;

            border: 1px solid var(--terceary-gray);
            border-radius: 10px;

            font: 400 var(--default-font) "Metropolis", sans-serif;

            > .select__indicators {
                > .select__indicator-separator {
                    display: none !important;
                }

                > .select__dropdown-indicator {
                    > svg,
                    img {
                        margin-right: 10px;
                        fill: var(--gray-200);
                        height: 30px;
                        width: 30px;
                    }
                }
            }

            > .select__value-container {
                padding: 0;
                display: flex !important;
                align-items: center !important;

                > .select__placeholder {
                    font: 500 var(--default-font) "Metropolis", sans-serif;
                    color: var(--terceary-gray);
                }
                > .select__single-value {
                    color: var(--primary-gray);
                    font: 500 var(--default-font) "Metropolis", sans-serif;
                }
            }
        }

        > .select__control--is-focused {
            box-shadow: none !important;
        }

        > .select__menu {
            border: 1px solid var(--terceary-gray);
            border-top: none;
            min-width: 100%;
            background: var(--primary-white);

            > .select__menu-list {
                min-width: 100%;
                > .select__option--is-selected {
                    background: var(--secondary-white) !important;
                }

                > .select__option--is-focused {
                    background: var(--secondary-white) !important;
                }

                > .select__option {
                    display: flex;
                    align-items: center;
                    height: 55px;
                    cursor: pointer;

                    padding-left: 24px !important;

                    color: var(--primary-gray);
                    font: 500 var(--default-font) "Metropolis", sans-serif;
                }
            }
        }
    }

    &.error {
        > .basic-single {
            > .select__control {
                border-color: var(--primary-red);
            }
        }
    }
`;

export const ErrorMessage = styled.span`
    opacity: 0;
    transition: 180ms all;
    &.error {
        opacity: 1;
    }
`;
