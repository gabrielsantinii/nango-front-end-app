import { ErrorMessage, HelpMessage } from "../styles";
import { InputProps } from "../types";
import { InputContainer } from "./styles";

export function TextInput({ name, register, error, label, placeholder, type, helpMessage }: InputProps) {
    return (
        <InputContainer className={error ? "input-container error" : "input-container"}>
            {label && <label>{label}</label>}
            <input name={name} {...register(name)} placeholder={placeholder} type={type} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {helpMessage && !error && <HelpMessage>{helpMessage}</HelpMessage>}
        </InputContainer>
    );
}
