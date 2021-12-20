import { Switcher } from "../../../../../../../../../shared/components";
import { notificationsService } from "../../../../../../../../../shared/services/notifications";
import { EmployeeCardProps } from "../interfaces";
import { Content, EditIcon, EmployeeCardContainer, FirstName, Header, LastName, Role } from "./styles";

export function EmployeeCard({ active, firstName, lastName, photoUrl, role }: EmployeeCardProps): JSX.Element {
    return (
        <EmployeeCardContainer backgroundImage={photoUrl} className="employee-card" >
            <Header onClick={notificationsService.resourceNotAvailable}>
                <Switcher active={active} />
                <EditIcon  />
            </Header>
            <Content onClick={notificationsService.resourceNotAvailable} >
                <FirstName>{firstName}</FirstName>
                <LastName>{lastName}</LastName>
                <Role>{role}</Role>
            </Content>
        </EmployeeCardContainer>
    );
}
