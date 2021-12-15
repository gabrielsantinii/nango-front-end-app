import styled from "styled-components";

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
