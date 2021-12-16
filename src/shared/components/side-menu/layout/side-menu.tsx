import faker from "faker";

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
import { Avatar } from "../..";
import { useNavigation } from "../../../hooks";

export function SideMenu(): JSX.Element {
    const navigation = useNavigation();
    return (
        <SideMenuContainer>
            <Logo src={logo} alt="NANGO" />
            <DashboardIcon className="active" />
            <ClassesIcon />
            <ActivitiesIcon />
            <SideMenuFooter>
                <Avatar src={faker.image.animals()} />
                <SignoutIcon onClick={navigation.goToLoginPage} />
            </SideMenuFooter>
        </SideMenuContainer>
    );
}