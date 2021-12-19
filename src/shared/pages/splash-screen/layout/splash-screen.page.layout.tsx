import logo from "../../../assets/images/logo.png";
import { Container } from "./styles";

export function SplashScreen(): JSX.Element {
  return (
    <Container>
      <img className="logo" src={logo} alt="NHD" />
    </Container>
  );
}
