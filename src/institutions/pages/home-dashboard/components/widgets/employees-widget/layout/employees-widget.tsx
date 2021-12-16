import faker from "faker";
import { EmployeeCard } from "../components";

import { EmployeesWidgetContainer } from "./styles";

export function EmployeesWidget(): JSX.Element {
    return (
        <EmployeesWidgetContainer>
            {Array.from({ length: 8 }).map((_, i) => (
                <EmployeeCard
                    active={true}
                    firstName={faker.name.firstName()}
                    lastName={faker.name.lastName()}
                    photoUrl={faker.image.cats()}
                    role="Educador"
                    key={i}
                />
            ))}
        </EmployeesWidgetContainer>
    );
}
