import { FooterContainer, FooterLine, FooterLogo, FooterText } from "./styles";

export function Footer(): JSX.Element {
    return (
        <FooterContainer>
            <FooterLine />
            <FooterText>Powered by</FooterText>
            <FooterLogo>NANGO</FooterLogo>
        </FooterContainer>
    );
}
