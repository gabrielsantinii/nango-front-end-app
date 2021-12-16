import { AuthPageContainer } from "../../../components/auth-page-container";
import { PrimaryButton } from "../../../../shared/components/buttons";
import { TextInput } from "../../../../shared/components/inputs";

import { LoginForm, ForgotPasswordLink } from "./styles";
import { ContentSection, SectionTitle, SectionDescription } from "../../../shared/styles";
import { useNavigation } from "../../../../shared/hooks";

export function LoginPageLayout(): JSX.Element {
    const navigation = useNavigation();
    return (
        <AuthPageContainer>
            <ContentSection>
                <SectionTitle>Instituição</SectionTitle>
                <SectionDescription>
                    Sua instituição não faz parte? Não perca tempo, registre-se agora!
                </SectionDescription>
                <PrimaryButton onClick={navigation.goToSignupPage}>Registrar</PrimaryButton>
            </ContentSection>

            <ContentSection>
                <SectionTitle>Logar</SectionTitle>
                <SectionDescription>Sua instituição já é cadastrada? acesse pelo login abaixo.</SectionDescription>
                <LoginForm>
                    <TextInput label="E-mail" name="email" register={() => {}} />
                    <TextInput label="Senha" name="pass" type="password" register={() => {}} />
                    <ForgotPasswordLink>Esqueceu sua senha?</ForgotPasswordLink>
                    <PrimaryButton className="login-button" type="button" onClick={navigation.goToHomePage}>
                        Logar
                    </PrimaryButton>
                </LoginForm>
            </ContentSection>
        </AuthPageContainer>
    );
}
