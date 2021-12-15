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
} from "./styles";
import logo from "../../../../shared/assets/images/logo.png";

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
                        {/* <PrimaryButton>Registrar</PrimaryButton> */}
                        <button type="button">Registrar</button>
                    </ContentSection>

                    <ContentSection>
                        <SectionTitle>Logar</SectionTitle>
                        <SectionDescription>
                            Sua instituição já é cadastrada? acesse pelo login abaixo.
                        </SectionDescription>
                        <LoginForm>
                            {/* <PrimaryInput label="E-mail" name="email" />
                        <PrimaryInput label="Senha" name="pass" /> */}
                            <input type="text" />
                            <input type="text" />
                            <ForgotPasswordLink>Esqueceu sua senha?</ForgotPasswordLink>
                            {/* <PrimaryButton>Logar</PrimaryButton> */}
                            <button type="button">Logar</button>
                        </LoginForm>
                    </ContentSection>
                    <Footer>
                        <FooterItem>2021 NANGO Todos os direitos são reservados.</FooterItem>
                    </Footer>
                </ContentWrapper>
            </ContentContainer>
            <IllustrationContainer></IllustrationContainer>
        </SignupContainer>
    );
}
