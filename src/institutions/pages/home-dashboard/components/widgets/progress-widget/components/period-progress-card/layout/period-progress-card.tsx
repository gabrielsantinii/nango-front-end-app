import { PeriodProgressCardProps } from "../interfaces";

import {
    PeriodProgressCardContainer,
    PeriodProgressDetails,
    CalendarIcon,
    ProgressDescription,
    ProgressCount,
    ProgressPercentage,
} from "./styles";

export function PeriodProgressCard({ daysCount }: PeriodProgressCardProps): JSX.Element {
    return (
        <PeriodProgressCardContainer className="period-progress-card">
            <ProgressPercentage>
                <CalendarIcon />
            </ProgressPercentage>
            <PeriodProgressDetails>
                <ProgressDescription>Final do semestre em</ProgressDescription>
                <ProgressCount>{`${daysCount} dias`}</ProgressCount>
            </PeriodProgressDetails>
        </PeriodProgressCardContainer>
    );
}
