import styled from "styled-components";
export const Container = styled.div`
    .flex-wrapper {
        display: flex;
        flex-flow: row nowrap;
    }

    .single-chart {
        width: 33%;
        justify-content: space-around;
    }

    .circular-chart {
        display: block;
        margin: 10px auto;
        max-width: 80%;
        max-height: 250px;
    }

    .circle-bg {
        fill: none;
        stroke: #eee;
        stroke-width: 3.8;

        &.transparent {
            stroke: transparent;
        }
        &.red {
            stroke: var(--primary-red);
        }
        &.blue {
            stroke: var(--primary-blue);
        }
        &.green {
            stroke: var(--primary-green);
        }
    }

    .circle {
        fill: none;
        stroke-width: 2.8;
        stroke-linecap: round;
        animation: progress 1s ease-out forwards;
    }

    @keyframes progress {
        0% {
            stroke-dasharray: 0 100;
        }
    }

    .circular-chart.red .circle {
        stroke: var(--primary-red);
    }

    .circular-chart.green .circle {
        stroke: var(--primary-green);
    }

    .circular-chart.blue .circle {
        stroke: var(--primary-blue);
    }

    .circular-chart.white .circle {
        stroke: var(--primary-white);
    }

    .percentage {
        fill: var(--primary-white);
        font-family: sans-serif;
        font-size: 10px;
        text-anchor: middle;
        font-weight: 500;
    }
`;
