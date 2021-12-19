import styled from "styled-components";
import { LeftArrowAlt } from "@styled-icons/boxicons-regular";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 30px;

    text-align: center;
`;

export const Header = styled.div`
    min-width:90%;
    display: flex;
    align-items: center;
    margin-bottom: 97px;
`;

export const BackIcon = styled(LeftArrowAlt)`
    width: 25px;
    height: 25px;
    fill: var(--terceary-gray);
    position: absolute;
    left: 10%;
    top: 5%;
`;

export const Title = styled.h1`
    font-size: 40px;
    color: var(--secondary-gray);
    max-width: 80%;
    margin: 0;
`;

export const Illustration = styled.img`
    max-width: 100%;
    max-width: 100%;
`;

export const Description = styled.p`
    color: var(--terceary-gray);
    max-width: 80%;
    margin: 0;
`;

export const Logo = styled.img`
    width: 152px;
    height: 42px;

    margin-top: 25px;
`;
