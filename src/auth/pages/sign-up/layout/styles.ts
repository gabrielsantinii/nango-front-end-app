import styled from "styled-components";

export const SignupContainer = styled.div`
    min-width: 100%;
    min-height: 100vh;
    display: flex;
`;

export const ContentContainer = styled.main`
    background: var(--primary-white);
    min-width: 50%;
    max-width: 50%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    min-height: 100%;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 179px;
    height: 48px;
    margin-bottom: 77px;
`;

export const ContentSection = styled.section``;

export const SectionTitle = styled.h1`
    margin-bottom: 14px;
`;

export const SectionDescription = styled.p`
    margin-bottom: 30px;
`;

export const LoginForm = styled.form``;

export const ForgotPasswordLink = styled.a``;

export const Footer = styled.section``;

export const FooterItem = styled.span``;

export const IllustrationContainer = styled.aside`
    background: var(--secondary-white);
    min-width: 50%;
    max-width: 50%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
