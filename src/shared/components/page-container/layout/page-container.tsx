import React from "react";
import { Footer } from "../components/footer";
import { Container, ContentWrapper, Wrapper } from "./styles";
import { SideMenu } from '../../'

export const PageContainer: React.FC = ({ children }) => {
    return (
        <>
        <SideMenu />
        <Container>
            <Wrapper>
                <ContentWrapper> {children}</ContentWrapper>
                <Footer />
            </Wrapper>
        </Container>
        </>
    );
};
