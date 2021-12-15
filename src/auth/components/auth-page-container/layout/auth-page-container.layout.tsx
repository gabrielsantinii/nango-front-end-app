import { AuthPageContainerProps } from "../interfaces";
import {
    SignupContainer,
    ContentContainer,
    ContentWrapper,
    Logo,
    Footer,
    FooterItem,
    IllustrationContainer,
    IllustrationTitle,
    IllustrationImage,
} from "./styles";

import illustrationImage from "../../../assets/fortalecendo-o-ensino.png";
import logo from "../../../../shared/assets/images/logo.png";

export function AuthPageContainer({ children }: AuthPageContainerProps): JSX.Element {
    return (
        <SignupContainer>
            <ContentContainer>
                <ContentWrapper>
                    <Logo src={logo} alt="Nango" />
                    {children}
                    <Footer>
                        <FooterItem>2021 NANGO - Todos os direitos são reservados.</FooterItem>
                    </Footer>
                </ContentWrapper>
            </ContentContainer>
            <IllustrationContainer>
                <IllustrationTitle>Fortalecendo o ensino.</IllustrationTitle>
                <IllustrationImage src={illustrationImage} alt="Fortalecendo o ensino" />
            </IllustrationContainer>
        </SignupContainer>
    );
}
