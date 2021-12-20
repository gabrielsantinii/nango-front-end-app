import faker from "faker";

import { notificationsService } from "../../../services/notifications";
import { Avatar } from "../..";
import { useAuthContext } from "../../../../auth/hooks/contexts";

import {
    SideMenuContainer,
    SideMenuFooter,
    Logo,
    DashboardIcon,
    ClassesIcon,
    ActivitiesIcon,
    SignoutIcon,
} from "./styles";
import logo from "../../../assets/images/logo.png";

export function SideMenu(): JSX.Element {
    const { signOut } = useAuthContext();
    return (
        <SideMenuContainer>
            <Logo src={logo} alt="NANGO" />
            <DashboardIcon className="active" />
            <ClassesIcon onClick={notificationsService.resourceNotAvailable} />
            <ActivitiesIcon onClick={notificationsService.resourceNotAvailable}/>
            <SideMenuFooter>
                <Avatar src={faker.image.animals()} />
                <SignoutIcon onClick={signOut} />
            </SideMenuFooter>
        </SideMenuContainer>
    );
}
