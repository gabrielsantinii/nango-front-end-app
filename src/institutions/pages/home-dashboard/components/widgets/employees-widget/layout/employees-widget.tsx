import faker from "faker";
import ScrollContainer from "react-indiana-drag-scroll";
import { useHomeDataContext } from "../../../../hooks";
import { fakeEmployees } from "../assets/fake/fake-employees";
import { EmployeeCard } from "../components";
import { profileTypeToRole } from "../config";

import { EmployeesWidgetContainer } from "./styles";

export function EmployeesWidget(): JSX.Element {
    const { employees } = useHomeDataContext();
    return (
        <>
            <EmployeesWidgetContainer>
                <ScrollContainer className="scroll-container">
                    {employees?.map((employee) => (
                        <EmployeeCard
                            active={employee.active}
                            firstName={employee.firstName}
                            lastName={employee.lastName}
                            photoUrl={employee.photoUrl}
                            // @ts-expect-error
                            role={profileTypeToRole[employee.profileType]}
                            key={employee.id}
                        />
                    ))}
                    {fakeEmployees.map((employee) => (
                        <EmployeeCard
                            active={employee.active}
                            firstName={employee.firstName}
                            lastName={employee.lastName}
                            photoUrl={employee.photoUrl}
                            // @ts-expect-error
                            role={profileTypeToRole[employee.profileType]}
                            key={employee.id}
                        />
                    ))}
                    {Array.from({ length: 1 }).map((_, i) => (
                        <EmployeeCard
                            active={false}
                            firstName={"Não existem"}
                            lastName={"Colaboradores"}
                            photoUrl=""
                            role="Professor"
                            key={i}
                        />
                    ))}
                </ScrollContainer>
            </EmployeesWidgetContainer>
        </>
    );
}
