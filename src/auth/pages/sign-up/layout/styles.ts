import styled from "styled-components";

export const SignupForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 19px;

    > .input-container + .input-container {
        margin-top: 15px;
    }

    > button {
        margin-top: 26px;
    }
`;