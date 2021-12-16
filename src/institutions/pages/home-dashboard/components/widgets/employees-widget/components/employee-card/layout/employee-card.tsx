import { Switcher } from "../../../../../../../../../shared/components";
import { EmployeeCardProps } from "../interfaces";
import { Content, EditIcon, EmployeeCardContainer, FirstName, Header, LastName, Role } from "./styles";

export function EmployeeCard({ active, firstName, lastName, photoUrl, role }: EmployeeCardProps): JSX.Element {
    return (
        <EmployeeCardContainer backgroundImage={photoUrl} className="employee-card" >
            <Header>
                <Switcher active={active} />
                <EditIcon />
            </Header>
            <Content>
                <FirstName>{firstName}</FirstName>
                <LastName>{lastName}</LastName>
                <Role>{role}</Role>
            </Content>
        </EmployeeCardContainer>
    );
}
