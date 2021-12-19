import { Container, Description, Illustration, Title, Logo, BackIcon, Header } from "./styles";
import mobileNotReadyImage from "../assets/mobile-not-ready.png";
import logo from "../../../assets/images/logo.png";

export function MobileNotReadyLayout(): JSX.Element {
    return (
        <Container>
            <Header>
                <BackIcon />
            </Header>
            <Title>Indisponível para mobile.</Title>
            <Illustration src={mobileNotReadyImage} alt="Indisponível" />
            <Description>
                Pedimos sinceras desculpas pelo ocorrido. Estamos trabalhando para atualizar nossos sistemas.
            </Description>
            <Logo src={logo} alt="Nango" />
        </Container>
    );
}
