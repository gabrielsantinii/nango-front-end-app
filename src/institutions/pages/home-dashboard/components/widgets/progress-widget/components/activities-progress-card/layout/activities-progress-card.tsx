import { Avatar } from "../../../../../../../../../shared/components";
import { CircleChart } from "../../../../../../../../../shared/components/charts";
import { ActivitiesProgressCardProps } from "../interfaces";

import {
    ActivitiesProgressCardContainer,
    ActivitiesProgressDetails,
    ProgressDescription,
    ProgressCount,
    ProgressPercentage,
} from "./styles";

export function ActivitiesProgressCard({ totalCount, finishedCount }: ActivitiesProgressCardProps): JSX.Element {
    return (
        <ActivitiesProgressCardContainer className="activities-progress-card">
            <ProgressPercentage>{`${(finishedCount * 100) / totalCount}%`}</ProgressPercentage>
            <ActivitiesProgressDetails>
                <ProgressDescription>Progresso das tarefas</ProgressDescription>
                <ProgressCount>{`${finishedCount} / ${totalCount}`}</ProgressCount>
            </ActivitiesProgressDetails>
        </ActivitiesProgressCardContainer>
    );
}
