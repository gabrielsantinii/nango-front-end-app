import { Calendar } from "../../../../../../../shared/components";

import { CalendarWidgetContainer } from './styles'

export function CalendarWidget(): JSX.Element {
    return (
        <CalendarWidgetContainer>
            <Calendar />
        </CalendarWidgetContainer>
    );
}
