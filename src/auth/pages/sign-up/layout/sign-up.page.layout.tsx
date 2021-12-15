import {
    SignupContainer,
    ContentContainer,
    ContentWrapper,
    Logo,
    ContentSection,
    SectionTitle,
    SectionDescription,
    LoginForm,
    ForgotPasswordLink,
    Footer,
    FooterItem,
    IllustrationContainer,
    IllustrationTitle,
    IllustrationImage,
} from "./styles";
import logo from "../../../../shared/assets/images/logo.png";
import illustrationImage from "../assets/fortalecendo-o-ensino.png";
import { PrimaryButton } from "../../../../shared/components/buttons";
import { TextInput } from "../../../../shared/components/inputs";

export function SignupPageLayout(): JSX.Element {
    return (
        <SignupContainer>
            <ContentContainer>
                <ContentWrapper>
                    <Logo src={logo} alt="Nango" />
                    <ContentSection>
                        <SectionTitle>Instituição</SectionTitle>
                        <SectionDescription>
                            Sua instituição não faz parte? Não perca tempo, registre-se agora!
                        </SectionDescription>
                        <PrimaryButton>Registrar</PrimaryButton>
                    </ContentSection>

                    <ContentSection>
                        <SectionTitle>Logar</SectionTitle>
                        <SectionDescription>
                            Sua instituição já é cadastrada? acesse pelo login abaixo.
                        </SectionDescription>
                        <LoginForm>
                            <TextInput label="E-mail" name="email" register={() => {}} />
                            <TextInput label="Senha" name="pass" type="password" register={() => {}} />
                            <ForgotPasswordLink>Esqueceu sua senha?</ForgotPasswordLink>
                            <PrimaryButton className="login-button">Logar</PrimaryButton>
                        </LoginForm>
                    </ContentSection>
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
