import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    min-width: 100%;
`;

export const FooterLine = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--quaternary-gray);
`;

export const FooterText = styled.p`
    margin-left: 20px;
    font-weight: 500;

    color: var(--quaternary-gray);
    white-space: nowrap; 
`;
export const FooterLogo = styled.p`
    margin-left: 10px;
    font-weight: 700;
    letter-spacing: 8px;

    color: var(--quaternary-gray);
    white-space: nowrap; 
`;
