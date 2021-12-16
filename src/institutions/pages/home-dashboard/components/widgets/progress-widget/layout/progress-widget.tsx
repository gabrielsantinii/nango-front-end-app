import faker from "faker";
import { ActivitiesProgressCard, PeriodProgressCard } from "../components";

import { ProgressWidgetContainer } from "./styles";

export function ProgressWidget(): JSX.Element {
    return (
        <ProgressWidgetContainer>
            <ActivitiesProgressCard finishedCount={56} totalCount={70} />
            <PeriodProgressCard daysCount={10} />
        </ProgressWidgetContainer>
    );
}
