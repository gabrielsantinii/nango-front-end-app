import faker from "faker";
import ScrollContainer from 'react-indiana-drag-scroll'
import { EmployeeCard } from "../components";

import { EmployeesWidgetContainer } from "./styles";

export function EmployeesWidget(): JSX.Element {
    return (
        <EmployeesWidgetContainer>
            <ScrollContainer className="scroll-container">
                {Array.from({ length: 8 }).map((_, i) => (
                    <EmployeeCard
                        active={true}
                        firstName={faker.name.firstName()}
                        lastName={faker.name.lastName()}
                        photoUrl={faker.image.animals()}
                        role="Educador"
                        key={i}
                    />
                ))}
            </ScrollContainer>
        </EmployeesWidgetContainer>
    );
}
