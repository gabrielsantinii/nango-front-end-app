import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    > label {
        margin-bottom: 8px;
    }
    > input {
        min-height: 55px;
        font-size: var(--default-font);
        border-radius: 10px;
        border: 1px solid var(--terceary-gray);
    }
`;
