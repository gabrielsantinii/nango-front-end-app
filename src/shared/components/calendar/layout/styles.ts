import styled from "styled-components";

export const CalendarContainer = styled.div`
    flex-basis: 100%;
    align-self: center;
    > .calendar {
        > .react-calendar__navigation {
            display: none;
        }

        > .react-calendar__viewContainer {
            > .react-calendar__month-view {
                > div {
                    > div {
                        > .react-calendar__month-view__weekdays {
                            margin-bottom: 8px;

                            > .react-calendar__month-view__weekdays__weekday {
                                font: 600 9.78px "Metropolis", sans-serif;
                                color: var(--secondary-gray);

                                text-transform: capitalize;
                                text-decoration: none;
                                text-align: center;

                                > abbr {
                                    text-decoration: none;
                                }
                            }
                        }

                        > .react-calendar__month-view__days {
                            > .react-calendar__tile {
                                /* width: 32.60px;
                                height: 32.60px; */
                                padding: 8px;
                                
                                background: transparent;
                                text-align: center;
                                
                                font: 600 9.78px "Metropolis", sans-serif;
                                color: var(--secondary-gray);
                                

                                border-radius: 4.15px;
                                border: 0.85px solid var(--quinquennial-gray);
                            }

                            > .react-calendar__month-view__days__day--neighboringMonth {
                                background: var(--primary-white);
                            }

                            > .react-calendar__tile--active {
                                background: var(--primary-red);
                                color: var(--primary-white);
                                border: none;
                            }
                        }
                    }
                }
            }
        }
    }
`;
