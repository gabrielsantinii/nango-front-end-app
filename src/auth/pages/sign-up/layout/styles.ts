import styled from "styled-components";

export const SignupContainer = styled.div`
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 1150px) {
        flex-direction: row;
    }
`;

export const ContentContainer = styled.main`
    background: var(--primary-white);
    min-width: 100%;
    min-height: 100vh;
    padding-bottom: 79px;
    padding-top: 79px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1150px) {
        min-width: 50%;
        max-width: 50%;
        min-height: 100%;
        max-height: 100%;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* min-height: 100%; */
    justify-content: center;
`;

export const Logo = styled.img`
    width: 179px;
    height: 48px;
    margin-bottom: 45px;
`;

export const ContentSection = styled.section`
    margin-top: 32px;
`;

export const SectionTitle = styled.h2`
    margin-bottom: 14px;
`;

export const SectionDescription = styled.p`
    margin-bottom: 30px;
`;

export const LoginForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 19px;

    > .input-container + .input-container {
        margin-top: 11px;
    }

    > .login-button {
        background-color: var(--primary-gray);
    }
`;

export const ForgotPasswordLink = styled.a`
    margin-left: auto;
    margin-top: 19px;
    margin-bottom: 19px;
`;

export const Footer = styled.section`
    margin-top: auto;
`;

export const FooterItem = styled.span`
    color: var(--quaternary-gray);
`;

export const IllustrationContainer = styled.aside`
    background: var(--secondary-white);
    min-width: 100%;
    max-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1150px) {
        min-width: 50%;
        max-width: 50%;
        min-height: 100%;
    }
`;

export const IllustrationTitle = styled.h1`
    max-width: 460px;
    color: var(--secondary-gray);
`;
export const IllustrationImage = styled.img`
    max-width: 560px;
`;
