import React from "react";
import ReactSelect from "react-select";
import { Controller, useFormContext } from "react-hook-form";

import { SelectInputProps } from "../types";

import { Container } from "./styles";
import { ErrorMessage, HelpMessage } from "../../styles";

export function SelectInput({
    name,
    label,
    isSearchable,
    options,
    defaultValue,
    error,
    isMulti,
    helpMessage,
    placeholder = "Selecione uma opção",
}: SelectInputProps): JSX.Element {
    const { control } = useFormContext();
    return (
        <Container className={error ? "select input-container error" : "select input-container"}>
            {label && <label>{label}</label>}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <ReactSelect
                        {...field}
                        isMulti={!!isMulti}
                        placeholder={placeholder}
                        className="basic-single"
                        classNamePrefix="select"
                        name={name}
                        options={options as any}
                        isSearchable={!!isSearchable}
                        noOptionsMessage={() => "Nenhuma opção correspondente"}
                        defaultValue={() => defaultValue}
                    />
                )}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {helpMessage && !error && <HelpMessage>{helpMessage}</HelpMessage>}
        </Container>
    );
}
