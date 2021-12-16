import { CircleChartProps } from "../interfaces";
import { Container } from "./styles";

export function CircleChart({ percentage, color, unfillColor }: CircleChartProps): JSX.Element {
    return (
        <Container>
            <div className="flex-wrapper">
                <div className="single-chart">
                    <svg viewBox="0 0 36 36" className={`circular-chart ${color}`}>
                        <path
                            className={`circle-bg ${unfillColor}`}
                            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            className="circle"
                            stroke-dasharray={`${percentage}, 100`}
                            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" className={`percentage`}>
                            {`${percentage}%`}
                        </text>
                    </svg>
                </div>
            </div>
        </Container>
    );
}
