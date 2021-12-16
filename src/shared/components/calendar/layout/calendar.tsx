import ReactCalendar from "react-calendar";

import { CalendarContainer } from "./styles";

export function Calendar(): JSX.Element {
    return (
        <CalendarContainer className="calendar-container">
            <ReactCalendar className="calendar"  value={new Date()} />
        </CalendarContainer>
    );
}
