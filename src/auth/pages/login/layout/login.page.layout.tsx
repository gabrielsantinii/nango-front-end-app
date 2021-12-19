import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginFormValues } from "../interfaces";
import { LoginSchema } from "../schemas";

import { AuthPageContainer } from "../../../components/auth-page-container";
import { PrimaryButton } from "../../../../shared/components/buttons";
import { TextInput } from "../../../../shared/components/inputs";

import { useNavigation } from "../../../../shared/hooks";

import { ContentSection, SectionTitle, SectionDescription } from "../../../shared/styles";
import { LoginForm, ForgotPasswordLink } from "./styles";
import { getFieldErrorMessage } from "../../../../shared/helpers";
import { LoginController } from "../controllers";

export function LoginPageLayout(): JSX.Element {
    const navigation = useNavigation();
    const formMethods = useForm<LoginFormValues>({ resolver: yupResolver(LoginSchema) });
    const loginController = useMemo(() => new LoginController(formMethods, navigation), [])
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
                <LoginForm onSubmit={formMethods.handleSubmit(loginController.login)}>
                    <TextInput
                        error={getFieldErrorMessage(formMethods, "email")}
                        label="E-mail"
                        name="email"
                        placeholder="Digite seu e-mail"
                        register={formMethods.register}
                    />
                    <TextInput
                        error={getFieldErrorMessage(formMethods, "pass")}
                        label="Senha"
                        name="pass"
                        type="password"
                        placeholder="Digite sua senha"
                        register={formMethods.register}
                    />
                    <ForgotPasswordLink>Esqueceu sua senha?</ForgotPasswordLink>
                    <PrimaryButton className="login-button" type="submit">
                        Logar
                    </PrimaryButton>
                </LoginForm>
            </ContentSection>
        </AuthPageContainer>
    );
}
