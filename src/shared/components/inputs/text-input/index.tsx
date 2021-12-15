import { ErrorMessage } from "../styles";
import { InputProps } from "../types";
import { InputContainer } from "./styles";

export function TextInput({ name, register, error, label, placeholder, type }: InputProps) {
    return (
        <InputContainer className="input-container">
            {label && <label>{label}</label>}
            <input name={name} {...register(name)} placeholder={placeholder} type={type} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputContainer>
    );
}
